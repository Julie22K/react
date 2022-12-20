import React, {createRef} from 'react';
import './css/index.css';
import './css/pages.css';

import {createBrowserRouter, RouterProvider, useLocation, useOutlet} from "react-router-dom";
import Home from "./pages/home";
import Palette from "./pages/palette";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import { Container } from 'react-bootstrap'

import { createRoot } from 'react-dom/client'


const routes = [
    { path: '/', name: 'Home', element: <Home/>, nodeRef: createRef() },
    { path: '/palette/:id', name: 'Palette', element: <Palette/>, nodeRef: createRef() }
]
const router = createBrowserRouter([
    {
        path: '/',
        element: <Example />,
        children: routes.map((route) => ({
            index: route.path === '/',
            path: route.path === '/' ? undefined : route.path,
            element: route.element,
        })),
    },
])


function Example() {
    const location = useLocation()
    const currentOutlet = useOutlet()
    const { nodeRef,name } =
    routes.find((route) => route.path === location.pathname) ?? {}
    const classes="page "+name;
    return (
        <>
            <Container>
                <SwitchTransition>
                    <CSSTransition
                        key={location.pathname}
                        nodeRef={nodeRef}
                        timeout={300}
                        classNames="page"
                        unmountOnExit
                    >
                        {(state) => (
                            <div ref={nodeRef} className={classes}>
                                {currentOutlet}
                            </div>
                        )}
                    </CSSTransition>
                </SwitchTransition>
            </Container>
        </>
    )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<RouterProvider router={router} />)
