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

        const data = [
            {
                key: '1',
                title: '#01 Estratégia de Produto',
                duration: '06:54'
            },
            {
                key: '2',
                title: '#02 Personas - na prática',
                duration: '08:03'
            },
            {
                key: '3',
                title: '#03 Roadmap - Na prática',
                duration: '06:12'
            },
            {
                key: '4',
                title: '#04 Introdução a Sketchs, Wireframes, Pro...',
                duration: '10:04'
            }
        ]


        return <Table columns={columns} dataSource={data} pagination={false} tableLayout='auto'/>;
    }
}
