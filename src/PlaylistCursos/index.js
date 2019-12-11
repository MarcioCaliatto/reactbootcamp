import React, { Component } from 'react';
import { Table } from 'antd';

// import { Container } from './styles';

export default class PlaylistCursos extends Component {

    render() {
        const itemStyle = {
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '16px',
            lineHeight: '24px',

            color: '#BDBDBD',
        }

        const itemDescStyle = {
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '16px',
            lineHeight: '24px',

            color: '#BDBDBD',
        }

        const columnTitleStyle = {
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '16px',
            lineHeight: '24px',

            color: '#333333',
        }

        const columns = [
            {
                title: () => <span style={columnTitleStyle}>Aula</span>,
                dataIndex: 'title',
                render: text => <span style={itemStyle}>{text}</span>,
            },
            {
                title: () => <span style={columnTitleStyle}>Duração</span>,
                dataIndex: 'duration',
                render: text => <span style={itemDescStyle}>{text}</span>
            },
        ]

        const dataSource = this.props.data

        return <Table columns={columns} dataSource={dataSource} pagination={false} tableLayout='auto'/>;
    }
}
