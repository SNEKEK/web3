import React, {useContext} from 'react';

import {Layout, Menu} from 'antd'
import {Route,Routes, useNavigate} from "react-router-dom";
import Jokes from "./Jokes";
import About from "./About";
import Joke from "./Joke";

const {Header, Content} = Layout

const App = () => {
    const navigate = useNavigate()
    return (
        <Layout className="layout">
            <Header>
                <Menu theme="dark" mode="horizontal" selectedKeys={[]}>
                    <Menu.Item onClick={() => navigate("/jokes")}>Jokes</Menu.Item>
                    <Menu.Item onClick={() => navigate("/about")}>About</Menu.Item>
                </Menu>
            </Header>
            <Content style={{padding: '30px 50px'}}>
                <Routes>
                    <Route path = "/about" element = {<About/>} />
                    <Route path = "/jokes" element = {<Jokes/>} />
                    <Route path = "/jokes/:id" element = {<Joke/>} />
                </Routes>
            </Content>
        </Layout>
    )
}

export default App
