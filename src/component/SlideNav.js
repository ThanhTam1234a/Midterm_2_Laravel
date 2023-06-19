import React from 'react'

const SlideNav = () => {
  return (
    <div>
     {/* Main Sidebar Container */}
<aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <a href="index3.html" className="brand-link">
    <img src="https://png.pngtree.com/png-vector/20210123/ourlarge/pngtree-cartoon-bakery-clipart-png-image_2778769.jpg" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">TIKI SHOP</span>
  </a>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="https://nhadepso.com/wp-content/uploads/2023/02/bo-suu-tap-50-hinh-anrh-cho-poodle-cute-de-thuong-dep-nhat_1.jpg" className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <a href="#" className="d-block">Võ Thành Tâm</a>
      </div>
    </div>
    {/* SidebarSearch Form */}
    <div className="form-inline">
      <div className="input-group" data-widget="sidebar-search">
        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-sidebar">
            <i className="fas fa-search fa-fw" />
          </button>
        </div>
      </div>
    </div>
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
        <li className="nav-item menu-open">
          <a href="#" className="nav-link active">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Dashboard
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="./index.html" className="nav-link">
                
                <p>Sản Phẩm Hot</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="./index2.html" className="nav-link">
               
                <p>Sản Phẩm Khuyến Mãi</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="./index3.html" className="nav-link">
              
                <p>Sản Phẩm Mới</p>
              </a>
            </li>
          </ul>
        </li>
        </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>

    </div>
  )
}

export default SlideNav
