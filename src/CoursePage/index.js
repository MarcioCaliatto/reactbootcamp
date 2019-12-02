import React, { Component } from 'react';
import Header from '../Header';
import CourseBody from '../CourseBody';
import Footer from '../Footer';
// import { Container } from './styles';

export default class CoursePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <CourseBody />
                <Footer />
            </div>
        );
    }
}
