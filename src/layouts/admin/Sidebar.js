import React from "react";
import {Link} from 'react-router-dom';
const Sidebar = () =>{
    return(
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
                <div className="nav">
                    <Link className="nav-link" to="/admin/dashboard">
                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                        Dashboard
                    </Link>
                    <Link className="nav-link" to="/admin/profile">
                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                        Profile
                    </Link>
                    <div className="sb-sidenav-menu-heading">Interface</div>
                    <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse"
                       data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                        <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                        Medias
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                    </Link>
                    <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne"
                         data-bs-parent="#sidenavAccordion">
                        <nav className="sb-sidenav-menu-nested nav">
                            <Link className="nav-link" to="/admin/add-media">Ajout Media</Link>
                            <Link className="nav-link" to="/admin/view-media">Liste Medias</Link>
                            <Link className="nav-link" to="/admin/edit-media">Modifier Medias</Link>
                        </nav>
                    </div>

                    <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse"
                          data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                        <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                        Events
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                    </Link>
                    <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne"
                         data-bs-parent="#sidenavAccordion">
                        <nav className="sb-sidenav-menu-nested nav">
                            <Link className="nav-link" to="/admin/add-event">Ajout Event</Link>
                            <Link className="nav-link" to="/admin/view-event">Liste Events</Link>
                            <Link className="nav-link" to="/admin/edit-event">Modifier Event</Link>
                        </nav>
                    </div>


                    <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse"
                          data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                        <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                        News
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                    </Link>
                    <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne"
                         data-bs-parent="#sidenavAccordion">
                        <nav className="sb-sidenav-menu-nested nav">
                            <Link className="nav-link" to="/admin/add-post">Ajout Post</Link>
                            <Link className="nav-link" to="/admin/view-post">Liste Post</Link>
                            <Link className="nav-link" to="/admin/edit-post">Modifier Post</Link>
                        </nav>
                    </div>

                    <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse"
                          data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                        <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                        Staff
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                    </Link>
                    <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne"
                         data-bs-parent="#sidenavAccordion">
                        <nav className="sb-sidenav-menu-nested nav">
                            <Link className="nav-link" to="/admin/add-staff">Ajout Staff</Link>
                            <Link className="nav-link" to="/admin/view-staff">Liste Staff</Link>
                            <Link className="nav-link" to="/admin/edit-staff">Modifier Staff</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Sidebar;