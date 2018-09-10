import React from 'react'
import { DatePicker } from 'antd'
import classNames from 'classnames'
import moment from 'moment'

function transformMomentDate(str){
    if( typeof(str) != 'string' ){
        console.log(str)
        console.log('不是一个字符串')
        return str
    }
    let splitStr = null
    if( str.includes('-') ){
        splitStr = '-'
    }else if( str.includes('/') ){
        splitStr = '/'
    }
    const arr = str.split(splitStr)
    let arrNum = arr.map(item => {
        return parseFloat(item) > 9 ? item : `0${parseFloat(item)}`
    })
    return moment(new Date(arrNum.join('-')))
}

class DateRangeDatePicker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            preValue: props.value && props.value[0] ? props.value[0] : null,
            nextValue: props.value && props.value[1] ? props.value[1] : null,
            visible: false
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            preValue: nextProps.value && nextProps.value[0] ? nextProps.value[0] : null,
            nextValue: nextProps.value && nextProps.value[1] ? nextProps.value[1] : null,
        })
    }

    //年月日
    transformDateToNum = (date) => {
        if (!date) {
            return 0
        }
        let time = date
        if (typeof date == 'string') {
            try {
                time = transformMomentDate(date)
            } catch (err) {
                time = moment()
            }

        }
        return time.format('YYYYMMDD');
        //  return parseInt(`${time.year()}${time.month() < 10 ? `0${time.month()}` : `${time.month()}`}${time.date() < 10 ? `0${time.date()}` : `${time.date()}`}`);

    }

    dateWindowChange = (type, status) => {
        if (type == 'next') {
            this.setState({
                visible: status
            })
        }
        if (type == 'next' && status == false) {
            // 采用异步是因为datePicker的onchange事件晚于onOpenChange触发
            setTimeout(() => {
                this.update()
            }, 0)
        }
    }

    dateChange = (type, value) => {

        // 针对setstate设置this.state是异步的，因为update需要取值
        this.state[type] = value
        this.setState({
            [type]: value,
            visible: type == 'nextValue' ? false : true
        })
        if (type == 'preValue') {
            const preNum = this.transformDateToNum(value)

            const { nextValue } = this.state
            const nextNum = this.transformDateToNum(nextValue)
            if (nextNum < preNum) {
                this.setState({
                    nextValue: value
                })
            }

        }
    }

    nextClick = () => {
        this.setState({
            visible: true
        })
    }

    update = () => {
        const { preValue, nextValue } = this.state
        if (this.props.onChange) {
            this.props.onChange([preValue, nextValue])
        }
        if (this.props.onPanelChange) {
            this.props.onPanelChange([preValue, nextValue])
        }
    }

    // transformDateToNum = (date) => {
    //     let time = date
    //     if (typeof date == 'string') {
    //         time = moment(new Date(date))
    //     }
    //     return parseInt(`${time.year()}${time.month() < 10 ? `0${time.month()}` : `${time.month()}`}`)
    // }

    disabledStartDate = (currentValue) => {
        const { startEnableDate } = this.props
        const { nextValue } = this.state
        if (!nextValue && !startEnableDate) {
            return false
        }
        if (!startEnableDate) {
            //return this.transformDateToNum(nextValue) < this.transformDateToNum(currentValue)||
            // return this.transformDateToNum(moment()) < this.transformDateToNum(currentValue)
            return false;
        } else {
            return this.transformDateToNum(currentValue) < this.transformDateToNum(startEnableDate) 
            //|| this.transformDateToNum(currentValue) > moment().format('YYYYMMDD')
        }
    }
    disabledEndDate = (currentValue) => {
        let { endEnableDate } = this.props
        const { preValue } = this.state
        if (!preValue && !endEnableDate) {
            return false
        }
        if (!endEnableDate) {
           // endEnableDate = moment();
            return this.transformDateToNum(preValue) > this.transformDateToNum(currentValue)
        }else{
            return this.transformDateToNum(preValue) > this.transformDateToNum(currentValue) || this.transformDateToNum(currentValue) > this.transformDateToNum(endEnableDate)
        }
      
    }

    render() {
        const { preValue, nextValue, visible } = this.state
        const props = this.props
        let className = classNames({
            'mk-dateRangeDatePicker': true,
            [props.className]: !!props.className
        })
        return (
            <div className={className}>
                <DatePicker
                    {...props}
                    showToday={false}
                    disabledDate={props.disabledStartDate ? props.disabledStartDate : this.disabledStartDate}
                    value={preValue}
                    onOpenChange={(status) => this.dateWindowChange('pre', status)}
                    onChange={(value) => this.dateChange('preValue', value)}
                />
                <span style={{ padding: '0 3px', lineHeight: '30px' }}>-</span>
                <DatePicker
                    {...props}
                    showToday={false}
                    disabledDate={props.disabledEndDate ? props.disabledEndDate : this.disabledEndDate}
                    onClick={this.nextClick}
                    value={nextValue}
                    open={visible}
                    onOpenChange={(status) => this.dateWindowChange('next', status)}
                    onChange={(value) => this.dateChange('nextValue', value)}
                />
            </div>
        )
    }
}

export default DateRangeDatePicker