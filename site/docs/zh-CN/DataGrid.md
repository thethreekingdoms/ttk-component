## DataGrid

##代码演示

### 基本用法

基本用法


:::demo
```js
getCell(len){
    return (
        <DataGrid.TextCell value={`${len.columnKey}${len.rowIndex}`} />
    )
}

render() {
    const {Column, Cell} =  DataGrid
    return (
        <div style={{height: '300px'}}>
            <DataGrid
                headerHeight={35}
                rowHeight={35}
                rowsCount={100}
                rowHeight={50}
                footerHeight={35}
                columns={[
                    <Column
                        columnKey="aaaa"
                        width={100}
                        header={<Cell>业务类型</Cell>}
                        cell={this.getCell.bind(100)}
                    >
                    </Column>,
                    <Column
                        columnKey="bbb"
                        width={100}
                        header={<Cell>业务大小</Cell>}
                        cell={this.getCell.bind(100)}
                    >
                    </Column>
                ]}
            >
            </DataGrid>
        </div>
        
    )
}
```
:::


+ 该组件是基于fixed-data-table-2的封装更详细的内容请改官方文档  http://schrodinger.github.io/fixed-data-table-2/getting-started.html

