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
        marginLeft: '65px',

        color: '#BDBDBD',
    }

    const columns = [
        {
            title: 'Aula',
            dataIndex: 'title',
            render: text => <span style={itemStyle}>{text}</span>,
        },
        {
            title: 'Duração',
            dataIndex: 'duration',
            render: text => <span style={itemDescStyle}>{text}</span>
        },
    ]

    const data = [
        {
            key: '1',
            title: '#01 Estratégia de Produto',
            duration: '06:54'
        },
        {
            key: '2',
            title: '#01 Estratégia de Produto',
            duration: '06:54'
        },
        {
            key: '3',
            title: '#01 Estratégia de Produto',
            duration: '06:54'
        },
        {
            key: '4',
            title: '#01 Estratégia de Produto',
            duration: '06:54'
        }
    ]


    return<Table columns = { columns } dataSource = { data } pagination={false} />;
    }
}
