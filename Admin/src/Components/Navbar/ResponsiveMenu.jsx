import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

// import { Link } from "react-router-native";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const ResponsiveMenu = ({ open }) => {
    return(
        <AnimatePresence mode="wait">
            {
                open && (
                    <motion.div
                    initial={{ opacity: 0, y: -100}}
                    animate={{ opacity: 1, y: 0}}
                    exit={{ opacity: 0, y: -100}}
                    transition={{ duration: 0.3}}
                    className="absolute top-20 left-0 w-full h-screen z-20"
                    >
                   
                        <div className="text-xl font-semibold uppercase bg-primary text-white text-center py-10 m-6 rounded-3xl">
                            <ul className="flex flex-col items-center">
                                <li><NavLink to ="/">Home</NavLink></li>
                                <li><NavLink to ="/events">Add Events</NavLink></li>
                                <li><NavLink to ="/settings">Org Settings</NavLink></li>
                                {/* <li>Registered</li>
                                <li>contact</li> */}
                            </ul>
                        </div>
                        </motion.div>
                
                )
            }
        </AnimatePresence>
    )
};


export default ResponsiveMenu