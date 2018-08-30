import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Table } from 'antd'
import { Map, List, is, fromJS, Record } from 'immutable'
import { Resizable } from 'react-resizable';
import Checkbox from '../checkbox/index'
import uuid from './uuid'
//import $ from 'jquery'
import changeColSize from './resize'
import DecorateTable from './DecorateTable'
import NoData from '../nodata'
import classNames from 'classnames'


const ResizeableTitle = (props) => {
    const { onResize, width, ...restProps } = props;

    // if (!width) {
    //   return <th {...restProps} />;
    // }

    return (
        <Resizable width={width ? width : 100} height={0} onResize={onResize}>
            <th {...restProps} ></th>
        </Resizable>
    )
}
@DecorateTable
class AntTable extends Component {
    static defaultProps = {
        resizeColumn: true
    }

    constructor(props) {
        super(props)
        const memoryWidthLocalSotrage = this.memoryWidth(props)
        this.state = {
            resizeColumn: this.props.allowColResize,
            selectValue: props.checkboxValue ? this.initSelectValue(props.checkboxValue, props.dataSource) : new Map(),
            checkboxAllStatus: null,
            checkboxId: new Map(),
            columns: [],
            memoryWidth: memoryWidthLocalSotrage,
            sumWidth: 1090
        }
        if (this.props.allowColResize) {
            const { newCol, sumWidth } = this.initStateWidth(props.columns, [], memoryWidthLocalSotrage)
            this.state.columns = newCol
            this.state.sumWidth = sumWidth
        }
        // this.initCheckboxId(props.dataSource)
    }

    componentWillMount = () => {

    }

    memoryWidth = (props) => {
        const { remberName } = props
        if (!remberName) {
            return {}
        }
        const memoryWidth = this.getAppData(remberName)
        return memoryWidth
    }

    removeDom = () => {
        let me = $(ReactDOM.findDOMNode(this))
        let table = me.find('table')
        let point = table.find('.table-needDel')
        const { noDelCheckbox } = this.props
        point.each(function (index, obj) {
            let num = $(obj).attr('data-rol')
            let sign = $(obj).parents('tr').find('.table-needDel2').attr('data-sign')
            if (!sign) {
                sign = $(obj).parents('tr').find('.table-needDel').attr('data-sign')
            }
            let backgroundColor = index % 2 == 0 ? '#fff' : '#F9F8FA '
            $(obj).parents('tr').css('background', backgroundColor).attr('data-background', backgroundColor).attr('data-hover', sign).find('td')
            let next = $(obj).parents('tr')
            for (var i = 0; i < num - 1; i++) {
                if (!noDelCheckbox) {
                    next.eq(0).next().css('background', backgroundColor).attr('data-hover', sign).find('td')
                } else {
                    next.eq(0).next().css('background', backgroundColor).attr('data-hover', sign).find('td').eq(0)
                }
                next = next.eq(0).next()
            }
            $(obj).parents('tbody').find(`tr[data-hover=${sign}]`).hover(() => {
                $(obj).parents('tbody').find(`tr[data-hover=${sign}]`).addClass('mk-active')
                $(`.ant-table-fixed tbody`).find(`tr[data-hover=${sign}]`).addClass('mk-active')
            }, () => {
                $(obj).parents('tbody').find(`tr[data-hover=${sign}]`).removeClass('mk-active')
                $(`.ant-table-fixed tbody`).find(`tr[data-hover=${sign}]`).removeClass('mk-active')
            })
        })
        try {
            let fixedTable = me.find('.ant-table-fixed')
            let point = table.find('.table-needDel2')
            let num = point.attr('data-rol')
            point.each(function (index, obj) {
                let num = $(obj).attr('data-rol')
                let sign = $(obj).attr('data-sign')
                let backgroundColor = table.find(`tr[data-hover=${sign}]`).eq(0).attr('data-background')
                $(obj).parents('tr').attr('data-hover', sign).css('background', backgroundColor)
                let next = $(obj).parents('tr').attr('data-hover', sign).find(`.table-needDel2[data-sign=${sign}]`)
                for (var i = 0; i < num - 1; i++) {
                    next.eq(0).next().attr('data-hover', sign).css('background', backgroundColor)
                    next = next.eq(0).next()
                }

                $(obj).parents('tr').hover(() => {
                    table.find(`tr[data-hover=${sign}]`).addClass('mk-active')
                    fixedTable.find(`tr[data-hover=${sign}]`).addClass('mk-active')
                }, () => {
                    table.find(`tr[data-hover=${sign}]`).removeClass('mk-active')
                    fixedTable.find(`tr[data-hover=${sign}]`).removeClass('mk-active')
                })
            })
        } catch (err) {
        }
    }

    componentWillReceiveProps(nextProps) {
        const { memoryWidth } = this.state
        if (nextProps.checkboxKey) {
            this.initCheckboxId(nextProps.dataSource)
        }
        if (nextProps.checkboxValue) {
            const selectValue = this.initSelectValue(nextProps.checkboxValue, nextProps.dataSource)
            this.setState({
                selectValue
            })
        }
        if (nextProps.allowColResize) {
            const { newCol, sumWidth } = this.initStateWidth(nextProps.columns, this.state.columns, memoryWidth)
            this.setState({
                columns: newCol,
                sumWidth
            })
        }

    }

    components = {
        header: {
            cell: ResizeableTitle,
        },
    }

    handleResize = index => (e, { size }) => {
        const { columns, appContainerWidth } = this.state
        delete columns[columns.length - 1]
        const Index = columns.findIndex(item => {
            return item && item.dataIndex == index
        })
        if (Index == -1) {
            return
        }
        let preWidth = columns[Index].width
        columns[Index].width = size.width
        let sumWidth = 0,
            columnDetails = [],
            param = {}
        columns.forEach(item => {

            columnDetails.push({
                fieldName: item.dataIndex,
                width: item.width,
                isVisible: true
            })
            sumWidth = sumWidth + item.width
        })
        param.columnDetails = columnDetails

        if (sumWidth <= appContainerWidth) {
            columns[Index].width = preWidth
        }
        this.setState({
            columns: columns,
            sumWidth
        })

        let that = this, res
        this.onResizend(function () {
            res = that.props.onResizeEnd(param)

        })

    }

    showTheadTitle = (title) => {
        if (Object.prototype.toString.call(title) == "[object String]") {
            return <span title={title}>{title}</span>
        } else {
            return title
        }
    }
    onResizend = (onResizend) => {
        /**
         * <<<算法说明>>>
         * ---------------------------------------------------------------------------------
         * 1. 默认窗口状态 normal.
         * 2. 调整窗口大小时状态 resizing.
         * 3. 调整窗口大小时设置动作状态为 resizing, 并设置延时任务. 若已存在延时任务,则重新设置.
         * 4. 若500毫秒后没有断续调整大小,则认为调整结束,执行resizend事件.
         */

        let that = this,
            timeOutTask = function () {
                that.state.taskPtr && clearTimeout(that.state.taskPtr)
                let taskPtr = setTimeout(function () {
                    onResizend && onResizend();
                }, 500)
                that.setState({ taskPtr: taskPtr })
            }
        timeOutTask()
    }
    initStateWidth = (data, columns, memoryWidth) => {
        if (!data) {
            return []
        }
        // let sumWidth = 0
        let norSetWidth = 0
        let flag = false
        data.forEach(item => {
            if (item.width) {
                norSetWidth++
            } else {
                flag = true
            }
        })
        if (flag) {
            norSetWidth = 0
        }
        let appContainerWidth = null
        try {
            let dom
            if( $ ) {
                dom = $('.edfx-app-portal-content-main')[0]
            }else {
                dom = document.getElementsByClassName('edfx-app-portal-content-main')[0]
            }
            if (dom) {
                appContainerWidth = dom.offsetWidth - 160 + 80
            } else {
                appContainerWidth = window.innerWidth - 100 - 160 + 80
            }

        } catch (err) {
            console.log(err)
            appContainerWidth = 1090
        }
        let avrWidth = Math.ceil((appContainerWidth) / (data.length - 1))
        let sumWidth1 = 0
        data.map((item) => {
            if (item.width) {
                sumWidth1 = sumWidth1 + parseFloat(item.width)
            }
        })
        const newCol = data.map((item) => {

            item.title = this.showTheadTitle(item.title)
            // if (sumWidth1 + 80 + 60 < appContainerWidth && !item.fixed) {
            //     item.width = avrWidth
            // }
            // sumWidth = sumWidth + parseFloat(item.width)

            return item
        })
        this.state.appContainerWidth = appContainerWidth
        return { newCol, sumWidth: sumWidth1 > appContainerWidth ? sumWidth1 : appContainerWidth + 50 }

    }

    setTableHeight = () => {
        try {
            const { dataSource, className, scroll, noCalculate,emptyShowScroll } = this.props
            if(!emptyShowScroll){
                if (noCalculate) {
                    return
                }
                if (!scroll) {
                    return
                }
                let container = ReactDOM.findDOMNode(this)
                if (!container) {
                    setTimeout(() => {
                        this.setTableHeight()
                    }, 100)
                }
                let tableBody
                if( $ ) {
                    tableBody = $(container).find('.ant-table-body')[0]
                }else {
                    tableBody = container.getElementsByClassName('ant-table-body')[0]
                }
                if (this.state.resizeColumn && dataSource && dataSource.length == 0) {
                    tableBody.style.overflowY = null
                }
                if (!scroll.x && !scroll.y) {
                    tableBody.style.height = 'auto'
                    return
                }
                if (!scroll.y) {
                    container.style.overflowY = 'auto'
                }
                if (tableBody.offsetHeight <= container.offsetHeight) {
                    container.style.overflowY = 'hidden'
                }
                if (!tableBody || this.props.dataSource && dataSource.length == 0) {
                    tableBody.style.height = 'auto'
                    return
                }
    
                tableBody.style.height = container.offsetHeight + 'px'
                const table = tableBody.getElementsByTagName('table')[0]
                tableBody.style.overflowY = 'auto'
            }else{
                  // if (noCalculate) {
            //     return
            // }
            // if (!scroll) {
            //     return
            // }
            let container = ReactDOM.findDOMNode(this)
            if (!container) {
                setTimeout(() => {
                    this.setTableHeight()
                }, 100)
            }
            let tableBody
            if( $ ) {
                tableBody = $(container).find('.ant-table-body')[0]
            }else {
                tableBody = container.getElementsByClassName('ant-table-body')[0]
            }
            if (this.state.resizeColumn && dataSource && dataSource.length == 0) {
                tableBody.style.overflowY = null
            }
            //  if (!scroll.x && !scroll.y) {
            // tableBody.style.height = 'auto'
            // return
            // }
            // if (!scroll && !scroll.y) {
            //     container.style.overflowY = 'auto'
            // }
            if (tableBody.offsetHeight <= container.offsetHeight) {
                container.style.overflowY = 'hidden'
            }
            // if (!tableBody || this.props.dataSource && dataSource.length == 0) {
            //     tableBody.style.height = 'auto'
            //     return
            // }

            tableBody.style.height = container.offsetHeight + 'px'
            const table = tableBody.getElementsByTagName('table')[0]
            tableBody.style.overflowY = 'auto'
            }
        } catch (err) {
            console.log(err)
        }
    }
    componentDidUpdate() {
        // this.removeDom()
        this.setTableHeight()
        if (this.state.resizeColumn) {
            let me = $(ReactDOM.findDOMNode(this))
            let table = me.find('table')
            let id = uuid()
            table.attr('id', id)
            // changeColSize(id, this.onResize)
            // 去掉所有col上面的width
            // this.setColumnsWidth(id)
        }
    }

    componentDidMount() {
        //  设置列表可拖动
        // this.removeDom()
        this.setTableHeight()
        if (this.state.resizeColumn) {
            let me = $(ReactDOM.findDOMNode(this))
            let table = me.find('table')
            let id = uuid()
            table.attr('id', id)
            // changeColSize(id)
            // 去掉所有col上面的width
            // this.setColumnsWidth(id)
        }
        try {
            let height = ReactDOM.findDOMNode(this).offsetHeight
            let titleHeight 
            if( $ ){
                titleHeight = $('.ant-table-thead')[0].clientHeight
            }else {
                titleHeight = document.getElementsByClassName('ant-table-thead')[0].clientHeight
            }
            if (height !== this.state.height) {
                this.setState({
                    height: height - titleHeight - 32
                })
            }
        }catch(err){

        }
        
        /**
         * 合并首列包含CHECKBOX的情况
         */
    }

    // setColumnsWidth = (id) => {
    //     let me = $(ReactDOM.findDOMNode(this))
    //     let table = me.find(`#${id}`)
    //     let colgroup = table.find('colgroup')
    //     let cols = colgroup.find('col')
    //     $(cols).each(function (index, el) {
    //         this.style.width = 'auto'
    //     })
    // }

    getColumns = () => {
        let columns
        if (this.state.allowColResize) {
            columns = this.state.columns
        } else {
            columns = this.props.columns
        }
        let children = fromJS(columns),
            renderColumns = []

        if (!children || children.size == 0) {
            return []
        }
        for (let i = 0; i < children.size; i++) {
            let child = children.get(i)
            let column = this.getColumnByMeta(child)
            if (column)
                renderColumns.push(column)
        }
        return renderColumns
    }

    getColumnByMeta = (meta) => {
        let children = meta.get('children'),
            ret = { ...meta.toJS() }
        if (ret._visible === false)
            return undefined

        if (children && children.size > 0) {
            ret.children = []
            children.map((sub) => {
                let o = this.getColumnByMeta(sub)
                if (!o) return

                if (!ret.children)
                    ret.children = []
                ret.children.push(o)
            })
        }

        return ret
    }

    initSelectValue = (selcted, all) => {
        let selectValue = new Map()
        const { checkboxKey } = this.props
        selcted.forEach(item => {
            const i = all.find(key => key[checkboxKey] == item)
            selectValue = selectValue.set(item, i)
        })
        return selectValue
    }

    showCheckboxType = () => {
        let { selectValue } = this.state,
            checkboxId = this.initCheckboxId(this.props.dataSource, 'get')

        let obj = {}
        if (!checkboxId.size) {
            obj.checked = false
        } else if (this.checkAllItem()) {
            obj.checked = true
        } else if (this.noCheckItem()) {
            obj.checked = false
        } else {
            obj.checked = false
            obj.indeterminate = true
        }
        return obj
    }

    noCheckItem = () => {
        let { selectValue } = this.state,
            checkboxId = this.initCheckboxId(this.props.dataSource, 'get')
        let flag = true
        checkboxId.map((item, key) => {
            if (selectValue.has(key)) {
                flag = false
            }
        })
        // for (const key of checkboxId.keys()) {
        //     if (selectValue.has(key)) {
        //         flag = false
        //     }
        // }
        return flag
    }

    checkAllItem = () => {
        let { selectValue } = this.state,
            checkboxId = this.initCheckboxId(this.props.dataSource, 'get')
        let flag = true
        checkboxId.map((item, key) => {
            if (!selectValue.has(key) && typeof key != "undefined") {
                flag = false
            }
        })
        // for (const key of checkboxId.keys()) {
        //     if (!selectValue.has(key) && typeof key != "undefined") {
        //         flag = false
        //     }
        // }
        return flag
    }

    checkboxAllClick = (e) => {
        let { selectValue } = this.state,
            checkboxId = this.initCheckboxId(this.props.dataSource, 'get')
        if (selectValue.size == 0) {
            checkboxId.map((value, key) => {
                selectValue = selectValue.set(key, value)
            })
            // for (const [key, value] of checkboxId.entries()) {
            //     selectValue = selectValue.set(key, value)
            // }
        } else if (this.checkAllItem()) {
            selectValue = new Map()
        } else {
            checkboxId.map((value, key) => {
                selectValue = selectValue.set(key, value)
            })
            // for (const [key, value] of checkboxId.entries()) {
            //     selectValue = selectValue.set(key, value)
            // }
        }
        this.setState({
            selectValue
        })
        this.update(selectValue)
    }

    checkboxItemClick = (e, key, record) => {
        let map = this.state.selectValue
        if (!map.has(key)) {
            map = map.set(key, record)
        } else (
            map = map.delete(key)
        )
        this.setState({
            selectValue: map
        })
        this.update(map)
    }


    initCheckboxId = (data, type) => {
        if (!data) {
            return
        }
        let map = new Map()
        const { checkboxKey } = this.props
        data.forEach(item => {
            if (item[checkboxKey] && !map.has(item[checkboxKey])) {
                map = map.set(item[checkboxKey], item)
            }
        })
        if (type == 'get') {
            return map
        }
        this.setState({
            checkboxId: map
        })
    }

    rowSpan = (text, record, index) => {
        const { checkboxKey } = this.props
        const { dataSource } = this.props
        if (!record[checkboxKey]) return 1;
        const key = dataSource.findIndex(item => item[checkboxKey] == record[checkboxKey])
        let num = 1
        if (key == index) {
            let i = 0
            while (dataSource[index + i] && dataSource[index + i][checkboxKey] && dataSource[key] && dataSource[key][checkboxKey] && (dataSource[index + i][checkboxKey] == dataSource[key][checkboxKey])) {
                i++
            }
            num = i
        } else {
            num = 0
        }
        return num
    }

    renderChekbox = (type) => {
        const { checkboxKey } = this.props
        const { selectValue, columns } = this.state
        if (type == 1) {
            return {
                title: <Checkbox {...this.showCheckboxType()} onClick={this.checkboxAllClick} />,
                dataIndex: 'checkboxKey',
                key: 'checkboxKey',
                className: "mk-table-checkbox",
                width: 34,
                render: (text, record, index) => {
                    const obj = {
                        children: record[checkboxKey] ? <Checkbox
                            checked={selectValue.has(record[checkboxKey])}
                            onClick={(e) => this.checkboxItemClick(e, record[checkboxKey], record)}
                        /> : null,
                        props: {
                            rowSpan: this.rowSpan(text, record, index),
                        },
                    }
                    return obj
                }
            }
        } else {
            return [
                {
                    title: <Checkbox {...this.showCheckboxType()} onClick={this.checkboxAllClick} />,
                    dataIndex: 'checkboxKey',
                    key: 'checkboxKey',
                    width: 34,
                    className: "mk-table-checkbox",
                    render: (text, record, index) => {
                        const obj = {
                            children: <Checkbox
                                checked={selectValue.has(record[checkboxKey])}
                                onClick={(e) => this.checkboxItemClick(e, record[checkboxKey], record)}
                            />,
                            props: {
                                rowSpan: this.rowSpan(text, record, index),
                            },
                        }

                        return obj
                    }
                },
                ...columns
            ]
        }

    }

    update = (data) => {
        if (this.props.checkboxChange) {
            const arr = []
            const arrValue = []
            const { selectValue } = this.state
            data.map((value, key) => {
                arr.push(key)
                arrValue.push(value)
            })
            // for (const [key, value] of data.entries()) {
            //     arr.push(key)
            //     arrValue.push(value)
            // }
            this.props.checkboxChange(arr, arrValue)
        }
    }

    rnederTitle = (text) => {
        return <span title={text}>{text}</span>
    }

    decorateColumns = (columns) => {
        return columns.map((col, index) => {
            if (!(col.tip == false) && !col.render && col.dataIndex) {
                col.render = this.rnederTitle
            }
            if (this.state.resizeColumn) {
                return {
                    ...col,
                    onHeaderCell: (column) => ({
                        width: column.width,
                        onResize: this.handleResize(column.dataIndex),
                    }),
                }
            } else {
                return col
            }
        })
    }

    getChildrenTitle = (item) => {
        const obj = {
            ...item,
            title: this.showTheadTitle(item.title)
        }
        if (item.children) {
            const arr = []
            for (const value of item.children.values()) {
                arr.push(this.getChildrenTitle(value))
            }
            obj.children = arr
        }
        return obj
    }

    decorateHeaderTitle = (column) => {

        if (!column) {
            return undefined
        }
        return column.map(item => {
            return this.getChildrenTitle(item)
        })
    }

    render() {
        let { ...otherProps } = this.props
        let { columns, sumWidth } = this.state,
            children = fromJS(this.props.columns),
            renderColumn = [],
            height = this.state.height, top, small = false, loading
        if (height >= 238) {
            top = (height - 238) / 2
        } else {
            small = true
            top = (height - 168) / 2
        }
        if (otherProps.loading != undefined) {
            loading = {
                size: 'large',
                delay: 2000,
                spinning: otherProps.loading,
                tip: "数据加载中..."
            }
        }
        let emptyText = <NoData style={{ position: 'relative', marginTop: top, paddingBottom: top }} small={small}>暂无数据</NoData>
        //table 控件自定义空数据描述
        if (this.props.emptyText) {
            emptyText = <NoData style={{ position: 'relative', marginTop: top, paddingBottom: top }} small={small}>{this.props.emptyText}</NoData>
        }

        if (this.props.pureText) {
            emptyText = this.props.pureText
        }

        let locale = { 'emptyText': emptyText }
        if (children && children.size > 0) {

            // for (let i = 0; i < children.size; i++) {
            //     let child = children.get(i)
            //     if(child && child.get('children')){
            //       let nextColumns = []
            //       let nextChildren = child.get('children')
            //       for (let j = 0; j < nextChildren.size; j++) {
            //         let nextChild = nextChildren.get(j)
            //
            //         let _visible = nextChild.get('_visible') === false ? false : true
            //         if (!_visible) continue
            //
            //         nextColumns.push(nextChild.toJS())
            //       }
            //       renderColumn.push(nextColumns)
            //     } else {
            //       let _visible = child.get('_visible') === false ? false : true
            //       if (!_visible) continue
            //
            //       renderColumn.push(child.toJS())
            //     }
            // }
            let renderColumn = this.getColumns()
            if (this.props.checkboxKey) {
                renderColumn = [this.renderChekbox(1), ...renderColumn]
            }
            const columns3 = this.decorateColumns(renderColumn)
            let newColumn = this.decorateHeaderTitle(columns3)
            let scrollX = this.props.dataSource && this.props.dataSource.length > 0 ? sumWidth : null
            if(this.props.emptyShowScroll){
                scrollX = sumWidth
            }
            if (this.state.resizeColumn) {
                return <Table {...this.props}
                    scroll={{ ...this.props.scroll, x: scrollX }}
                    components={this.components}
                    columns={this.addColumn(this.decorateHeaderTitle(columns3))}
                    locale={{ 'emptyText': emptyText }}
                    loading={loading}
                />
            } else {
                return <Table {...this.props} columns={this.decorateHeaderTitle(columns3)} locale={{ 'emptyText': emptyText }} loading={loading} />
            }



        }
        else {
            return <Table {...this.props} columns={this.decorateHeaderTitle(this.props.columns)} locale={{ 'emptyText': emptyText }} loading={loading} />
        }
    }

    addColumn = (data) => {
        const me = ReactDOM.findDOMNode(this)
        if (!me) {
            return data
        }
        const containerWidth = me.offsetWidth
        let setWidthSum = 0
        data.forEach(item => {
            setWidthSum = setWidthSum + parseFloat(item.width)
        })
        if (setWidthSum > containerWidth) {
            return data
        }
        let remain = containerWidth - setWidthSum + 50
        data.splice(data.length - 1, 0, {
            dataIndex: 'remain',
            title: <span></span>,
            key: 'remain',
            width: remain
        })
        return data
    }
}

AntTable.Column = Table.Column
AntTable.ColumnGroup = Table.ColumnGroup
AntTable.rowSelection = Table.rowSelection
AntTable.selection = Table.selection

export default AntTable
