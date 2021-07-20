import { Switch, Route } from 'react-router-dom'
import Icon from 'react-hero-icon'
import { ProductPage } from "./../Product/index";
import { ArticlePage } from './ArticlePage'
import { Menu } from '@headlessui/react'
import '../../styles/home.css'

function Brand () {
    return <span className="header-brand bg-clip-text text-transparent bg-gradient-to-r from-gray-700 via-gray-900 to-black">titoo_dev</span>
}


function MenuDropDown() {
    const url = "#" 
  return (
    <Menu as="div" className="relative z-50 header-menu">
      <Menu.Button><Icon icon="menu" type="solid" /></Menu.Button>
      <Menu.Items className="w-48 divide-y-2 divide-gray-200 bg-white rounded-lg flex flex-col absolute right-0">
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-gray-300'} text-lg font-medium text-gray-700 px-4 py-3`}
              href={url}
            >
              Home
            </a>
          )}
        </Menu.Item>

        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-gray-300'} text-lg font-medium text-gray-700 px-4 py-3`}
              href={url}
            >
              Blog
            </a>
          )}
        </Menu.Item>
        <Menu.Item disabled>
          <span className="opacity-75 text-lg font-medium text-gray-600 px-4 py-3">About Me</span>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}

function Navbar () {
    return (<div className="header-navbar">
        <a className="header-navlink" href="false">Home</a>
        <a className="header-navlink header-navlink-active" href="false">Blog</a>
        <a className="header-navlink" href="false">About Me</a>
    </div>)
}


function Header () {
    return <nav>
        <div className="header">
            <Brand></Brand>
            <MenuDropDown></MenuDropDown>
            <Navbar></Navbar>        
        </div>
    </nav>
}


function Footer () {
    return <footer className="py-16 bg-gradient-to-t from-gray-400  to-gray-100 space-y-4 text-center">
        <h3 className="text-2xl font-bold text-gray-800">Contact</h3>
        <h6 className="text-gray-800 font-medium">RAZAFIMBELO Titosy Manankasina</h6>
        <p className="text-gray-800 font-medium ">IGGLIA3</p>
        <p className="flex justify-center items-center text-gray-700 font-medium"><Icon icon="at-symbol" type="solid"/><span>titosymanankasina1@gmail.com</span></p>
    </footer>
}


export default function Home() {
    return <div className="static">
        <div className="relative circle-size-xs lg:circle-size-xs 2xl:top-20 2xl:left-20 bg-gradient-to-r from-green-500 via-green-200 to-yellow-500 rounded-full transform -translate-y-28"></div>
        <div className="glass absolute w-full top-0">
            <Header></Header>
            <Switch>
                <Route exact path="/">
                    <ArticlePage></ArticlePage>
                </Route>
                <Route path="/product/:articleId">
                    <ProductPage></ProductPage>
                </Route>
                <Route>
                    <div className="h-screen w-full flex flex-col justify-center">
                        <h1 className="text-7xl font-semibold text-gray-800 text-center">404: Page not found</h1>
                    </div>
                </Route>
            </Switch>
            <Footer></Footer>
        </div>
    </div>
}


