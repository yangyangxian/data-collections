import * as React from 'react';
import { DataGrid,GridToolbar } from '@mui/x-data-grid';

export class DataTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //Not used state yet cause I don't know what the meaning of using the state is for now
            //All default values are set in the render method
        };
    }

    render() {
        return (
            <DataGrid
                {...this.props}
                slots={{ toolbar: GridToolbar, }}
                columnVisibilityModel = { this.props.columnVisibilityModel ||{
                    id: false,
                }}
                rowHeight= { this.props.rowHeight || 110}
                sx= { this.props.sx || { border: 0 }}
            />
        );
    }
}