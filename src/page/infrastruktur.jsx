import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { Fab } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Grid from '@mui/material/Grid';
import Man from '../image/man.png'
import Woman from '../image/woman.png'
import MenuIcon from "../image/menu-icon.png";
import logo from "../image/logo.png";
import Ind from '../image/ind.png';
import Eng from '../image/eng.png';
import Menu from '../image/menu.png';
import IconItem from '../image/icon - item.png'
import Icon from '../image/icon-menu2.png'
import Play from '../image/play-button.png'
import Video1 from  '../video/video1.mp4'
import Icon1 from '../image/icon-menu2-1.png'
import Icon2 from '../image/icon-menu2-2.png'
import Icon3 from '../image/icon-menu2-3.png'
import Icon4 from '../image/icon-menu2-4.png'
import Icon5 from '../image/icon-menu2-5.png'
import Icon12 from '../image/icon12.png'
import Icon13 from '../image/icon13.png'
import Image1 from '../image/image1-menu2.png';
import Image2 from '../image/image2-menu2.jpg';
import Image3 from '../image/image3-menu2.jpg';
import Image4 from '../image/image4-menu2.jpg';
import Image5 from '../image/image5-menu2.jpg';
import Image6 from '../image/image6-menu2.png';
import Image7 from '../image/image7-meu2.png';
import Image8 from '../image/image8-menu2.png';
import Image9 from '../image/image9-meu2.png';
import Image10 from '../image/image10-menu2.png';
import video2 from '../video/video2.mp4'
import video3 from '../video/video3.mp4'
import video4 from '../video/video4.mp4'
import video5 from '../video/video5.mp4'
import UpArrow from '../image/up-arrow.png'
import Team from '../image/team.png'
import Ball from '../image/ball2.png'
import { FormattedMessage, useIntl } from  "react-intl";
import { AnimatePresence } from "framer-motion";
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion'
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Box, useMediaQuery, Typography, TextField, Button, Modal, Portal   } from "@mui/material";

export function Infrastruktur({ setLocale }) {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const handleOpen = () => setOpen1(true);
    const handleClose = () => setOpen1(false);
    const [modalStage, setModalStage] = useState('none'); 
    const [modalStage2, setModalStage2] = useState('none2');
    const [modalStage3, setModalStage3] = useState('sos'); 
    const [modalStage4, setModalStage4] = useState('jf'); 
    const [modalStage5, setModalStage5] = useState('hs');
    const [modalStage6, setModalStage6] = useState('iss');

    const openMainModal = () => setModalStage('main');
    const closeAll = () => setModalStage('none');
    const closeAll2 = () => setModalStage2('none2');
    const closeAll3 = () => setModalStage3('sos');
    const closeAll4 = () => setModalStage4('jf');
    const closeAll5 = () => setModalStage5('hs');
    const closeAll6 = () => setModalStage6('iss');

    const carouselRef = useRef(null);

    const phoneNumber = '+6285211273343';
    const message = 'Saya butuh informasi LindanTech'
  
    const handleClick = () => {
      const encodedMessage = encodeURIComponent(message);
      const waUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      window.open(waUrl, "_blank");
  };

  const handleScroll = () => {
    const element = document.getElementById('support1');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [visible, setVisible] = useState({
    top: false,
    left: false,
    right: false,
  });


    const menuItems = [
        { text: "Blog", path: "/" },
        { text: "Service", path: "/" },
        { text: "Contact", path: "/" },
    ];

    const menuItems1 = [
      { icon: Icon4, text: 'Layanan IT Hardening', targetId: 'support1' },
      { icon: Icon3, text: 'Dukungan Operasional IT', targetId: 'support2' },
      { icon: Icon2, text: 'Layanan Migrasi & Pemeliharaan Sistem', targetId: 'support3' },
      { icon: Icon1, text: 'Keahlian SysAdmin Multi-Platform', targetId: 'support4' },
    ];

    const menuItems2 = [
        { text: "LindanTech", path: "/" },
        { text: "Infrastruktur IT", path: "/infrastruktur" },
        { text: < FormattedMessage id="menu-1" />, id: "/" },
        { text: < FormattedMessage id="menu-2" />, path: "/we-are" },
    ];

    return (
      <>
       <AppBar 
        position = { !isMobile ? "relative" : "fixed" }
        sx={{ 
            maxWidth: isMobile ? "100%" : "60%", 
            margin: "auto", 
            mt: isMobile ? 0 : 3, // Tambahkan margin atas saat di desktop
            borderRadius: isMobile ? 0 : 2,
            backgroundColor: "white", 
            boxShadow: 3, 
            color: "black",
            padding: isMobile ? "8px 16px" : "8px 32px", // Padding agar lebih proporsional
            zIndex: 9,
            marginBottom: 0
        }}
        >
            <Toolbar sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                
                {/* Menu Icon & Logo dalam satu baris */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    {/* Menu Icon */}
                    <IconButton 
                        edge="start" 
                        color="inherit" 
                        aria-label="menu" 
                        onClick={() => setOpen(true)}
                        sx={{ 
                            backgroundColor: "rgba(255, 156, 75, 0.8)", 
                            borderRadius: "50%", 
                            padding: 1, 
                            transition: "transform 0.2s ease-in-out",
                            "&:hover": { 
                                backgroundColor: "rgba(255, 156, 75, 0.8)", 
                                transform: "translateY(-2px)"
                            } 
                        }}
                    >
                        <img src={MenuIcon} alt="Menu" style={{ width: 24, height: 24 }} />
                    </IconButton>

                    {/* Logo Image */}
                    <Box sx={{ marginLeft: !isMobile ? 10 : 5 }}>
                        <img src={logo} alt="Logo" style={{ height: isMobile ? 60 : 60, paddingTop: isMobile ? 10 : 9 }} />
                    </Box>
                </Box>

                {/* Menu Navigasi (Hanya muncul di desktop) */}
                {!isMobile && (
                    <Box
                    sx={{
                        display: "flex",
                        gap: 4,
                        alignItems: "center", // Menjadikan elemen sejajar secara vertikal
                    }}
                    >
                    <Typography className="menu" component={Link} to="/">
                        LindanTech
                    </Typography>
                    <Typography className="menu" component={Link} to="/infrastruktur">
                        Infrastruktur IT
                    </Typography>
                    <Typography
                        className="menu"
                        sx={{
                        textDecoration: "none",
                        color: "black",
                        fontWeight: 500,
                        cursor: `pointer`,
                        "&:hover": { color: "rgba(255, 156, 75, 0.8)" },
                        }}
                        onClick={() => {
                        const element = document.getElementById("solution");
                        if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                    
                            const observer = new IntersectionObserver(
                            (entries) => {
                                if (entries[0].isIntersecting) {
                                window.scrollBy(0, -10);
                                observer.disconnect();
                                }
                            },
                            { threshold: 1.0 }
                            );
                    
                            observer.observe(element);
                        }
                        }}
                    >
                        <FormattedMessage id="menu-1" />
                    </Typography>
                    <Typography
                        className="menu"
                        component={Link}
                        to="/we-are"
                        sx={{
                        textDecoration: "none",
                        color: "black",
                        fontWeight: 500,
                        "&:hover": { color: "rgba(255, 156, 75, 0.8)" },
                        }}
                    >
                        <FormattedMessage id="menu-2" />
                    </Typography>
                    <Box position="relative">
                        <Button sx={{ cursor: "pointer" }} onClick={() => setIsOpen(!isOpen)}>
                            <img src={Menu} style={{ height: 30, width: 30 }} alt="Menu" />
                        </Button>

                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    key="dropdown"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    style={{
                                        background: "linear-gradient(135deg, rgba(0, 198, 255, 0.2), rgba(0, 255, 153, 0.2))",
                                        backdropFilter: "blur(10px)",
                                        WebkitBackdropFilter: "blur(10px)",
                                        padding: "16px",
                                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                                        borderRadius: "8px",
                                        marginTop: "30px",
                                        width: "200px",
                                        position: "absolute",
                                        border: "1px solid rgba(255, 255, 255, 0.3)",
                                    }}
                                >
                                    <Box display="flex" flexDirection="row" justifyContent="center" gap={5}>
                                    {/* English */}
                                    <Button onClick={() => setLocale("en")} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        <Box component="img" src={Eng} alt="English" width={40} height={40} />
                                        <Typography mt={1} fontSize={14} fontWeight={500} color="white">
                                        English
                                        </Typography>
                                    </Button>

                                    {/* Indonesian */}
                                    <Button onClick={() => setLocale("id")} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        <Box component="img" src={Ind} alt="Indonesian" width={40} height={40} />
                                        <Typography mt={1} fontSize={14} fontWeight={500} color="white">
                                        Indonesia
                                        </Typography>
                                    </Button>
                                    </Box>

                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Box>
                    </Box>
                )}
            </Toolbar>
        </AppBar> 

        <Box
        display={ !isMobile ? "flex" : "block"}
        alignItems="center"
        justifyContent="center"
        p={4}
        maxWidth="600px"
        mx="auto"
        position={'relative'}
        top={isMobile ? 100 : 0}
        >
        {/* Kiri: Headline */}
        <Box flex={1} pr={6}>
        <Typography
            className="headline-menu2"
            sx={{
            fontSize: !isMobile ? 50 : 40,
            color: '#2d465e',
            fontWeight: 'bold',
            lineHeight: 1.2,
            display: 'flex',
            flexDirection: 'column',
            }}
        >
            <Box display="flex" gap={1}>
            <Box component="span">Infrastruktur</Box>
            <Box component="span">IT</Box>
            </Box>

            {/* Tangguh */}
            <Box component="span">
            <Typography
                className="headline-menu2"
                sx={{ color: '#0d83fd', fontSize: 50, fontWeight: 'bold' }}
            >
                Tangguh
            </Typography>
            </Box>

            {/* Ikon-ikon di bawah Tangguh */}
            <Box mt={3} display="flex" flexDirection="column" gap={2}>
            {/* Item 1 */}
            <Box display="flex" alignItems="center" gap={2}>
                <img src={IconItem} alt="Icon 1" width={40} height={40} />
                <Typography className="headline-menu2" sx={{ fontSize: 20, fontWeight: 500, color: '#2d465e' }}>
                Keamanan Maksimal
                </Typography>
            </Box>

            {/* Item 2 */}
            <Box display="flex" alignItems="center" gap={2}>
                <img src={IconItem} alt="Icon 2" width={40} height={40} />
                <Typography className="headline-menu2" sx={{ fontSize: 20, fontWeight: 500, color: '#2d465e' }}>
                Skalabilitas Fleksibel
                </Typography>
            </Box>

            {/* Item 3 */}
            <Box display="flex" alignItems="center" gap={2}>
                <img src={IconItem} alt="Icon 3" width={40} height={40} />
                <Typography className="headline-menu2" sx={{ fontSize: 20, fontWeight: 500, color: '#2d465e' }}>
                Dukungan Penuh
                </Typography>
            </Box>
            </Box>
        </Typography>

        <Box mt={10} display="flex" gap={2}>
        <Button
        onClick={handleScroll}
            style={{
            width: '100px',
            textTransform: 'none',
            backgroundColor: '#0d83fd',
            }}
        >
            <Typography className="headline-menu2" color="white">
            Telusuri
            </Typography>
        </Button>
        {/* Button View */}
        <Button
            onClick={handleOpen}
            style={{
            textTransform: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            paddingLeft: '12px',
            paddingRight: '12px',
            }}
        >
            <img src={Play} alt="Play" width={20} height={20} />
            <Typography className="headline-menu2" color="#2d465e">
            View
            </Typography>
        </Button>

        {/* Modal Video */}
        <Modal
            open={open1}
            onClose={handleClose}
            aria-labelledby="video-modal"
            aria-describedby="video-display-modal"
            sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            }}
        >
           <Box
            sx={{
                outline: 'none',
                position: 'relative',
                width: '80%',
                maxWidth: 800,
                bgcolor: 'black',
                borderRadius: 2,
            }}
            >
            <video
                width={ !isMobile ? "50%" : "70%"}
                autoPlay
                loop
                playsInline
                style={{
                zIndex: 9999,
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
                boxShadow: '0 0 30px 5px rgb(162, 198, 238)', // 💙 Blue shadow
                borderRadius: '12px',
                }}
            >
                <source src={Video1} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </Box>

        </Modal>
        </Box>
        </Box>



        {/* Kanan: Gambar */}
        <Box flex={1} display="flex" justifyContent="flex-end">
            <img
            src={Icon}
            alt="Infrastruktur IT"
            width={ !isMobile ? 560 : 300}
            height={!isMobile ? 560 : 300}
            style={{ objectFit: "contain" }}
            />
        </Box>
        </Box>

        <Box 
        sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            marginTop: !isMobile ? 4 : 10
        }}
        >
        <Box 
        sx={{ 
            width: '55%', 
            maxWidth: 1200,
            width: '100%',
            display: isMobile ? 'grid' : 'flex',
            gridTemplateColumns: isMobile ? '1fr 1fr' : 'none',
            flexDirection: isMobile ? 'initial' : 'row',
            flexWrap: isMobile ? 'wrap' : 'nowrap',
            justifyContent: isMobile ? 'center' : 'initial',
            gap: 2,
        }}
        >

        {menuItems1.map((item, index) => (
          <Box 
            key={index}
            onClick={() => {
              const element = document.getElementById(item.targetId);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 2,
              padding: 2,
              cursor: 'pointer',
              '&:hover .icon-wrapper': {
                backgroundColor: '#e3f2fd',
                border: '2px solid #0d83fd',
                transform: 'scale(1.05)',
              }
            }}
          >
            <Box
              className="icon-wrapper"
              sx={{
                borderRadius: '50%',
                padding: 1.2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background-color 0.4s ease, border 0.4s ease, transform 0.3s ease',
              }}
            >
              <img src={item.icon} alt={`icon-${index}`} width={ !isMobile ? 40 : 30} height={!isMobile ? 40 : 30} />
            </Box>
            
            <Typography className="headline-menu2" fontSize={ !isMobile ? 15 : 13}>
              {item.text}
            </Typography>
          </Box>
        ))}

        </Box>
        </Box>

        <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '0 auto',
          width: '80%',
          height: !isMobile  ? '800px' : '1650px',
          padding: 4,
          backgroundColor: 'white',
          borderRadius: 2,
          overflow: 'hidden',
          top: 100,
          marginBottom: 0,

        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          height: '10px',
          width: '100%',
          background: 'linear-gradient(270deg, #0d83fd, orange, #0d83fd)',
          backgroundSize: '600% 600%',
          animation: 'gradientShift 6s ease infinite',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '10px',
          width: '100%',
          background: 'linear-gradient(to right, orange, #0d83fd)',
          backgroundSize: '600% 600%',
          animation: 'gradientShift 6s ease infinite',
        },

        '@keyframes gradientShift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        '@keyframes fadeInUp': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        '@keyframes fadeInLeft': {
          '0%': { opacity: 0, transform: 'translateX(-50px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        '@keyframes fadeInRight': {
          '0%': { opacity: 0, transform: 'translateX(50px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      }}
    >
      {/* Top Typography */}
      <Typography
      id="support1"
      className="headline-menu2"
        sx={{
          zIndex: 1,
          fontSize: 30,
          fontWeight: 'bold',
          color: '#2d465e',
          lineHeight: 1.2,
          position: 'relative',
          top: 0

        }}
      >
        Memastikan Kepatuhan terhadap Standar Keamanan Global
      </Typography>

      {/* Bottom: Left & Right Text */}
      <Box
        sx={{
          display: !isMobile ? 'flex' : 'block',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          marginTop: !isMobile ? 8 : 20,
          gap: 50,
          position: 'relative',
          px: 10,
        }}
      >
        {/* KIRI */}
        <Box
        sx={{
          position: 'relative', // tambahkan ini
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #e0f7ff, rgb(226, 239, 245))',
          px: !isMobile ? 2 : 0,
          py: 1,
          height: !isMobile ? 500 : 400,
          width: !isMobile ? 800 : 320,
          borderRadius: 2,
          animation: visible.left ? 'fadeInLeft 0.8s ease-out' : 'none',
          zIndex: !isMobile ? 2 : 0
        }}
      >
        {/* Gambar di tengah atas */}
        <Box
          component="img"
          src={Icon5}
          alt="Icon"
          sx={{
            position: 'absolute',
            top: -90, // sesuaikan posisi vertikal, bisa diganti ke -10 atau -30 tergantung ukuran gambar
            left: '50%',
            transform: 'translateX(-50%)',
            height: !isMobile ? 150 : 120, // sesuaikan ukuran gambar
            zIndex:  4 
          }}
        />
           <Box
              sx={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
                maxWidth: 700,
              }}
            >
              <Typography
                className="headline-menu2"
                sx={{
                  fontSize: !isMobile ? 20 : 14,
                  color: '#49515b',
                  textAlign: 'left',
                  width: isMobile ? 300 : '100%'
                }}
              >
                Sebagai bagian dari komitmen kami dalam menyediakan solusi IT yang tangguh dan andal, kami menghadirkan layanan IT Hardening untuk memastikan bahwa sistem Anda dikonfigurasi sesuai dengan standar keamanan internasional, khususnya benchmark dari Center for Internet Security (CIS).
                Tim kami memiliki keahlian dalam melakukan hardening pada berbagai sistem operasi (Linux, Windows, berbasis Unix) dengan dua pendekatan utama:
              </Typography>

              <Button
                variant="contained"
                onClick={openMainModal}
                sx={{
                  backgroundColor: '#020842',
                  '&:hover': { backgroundColor: '#030b60' },
                  textTransform: 'none',
                  position: 'relative',
                  top: !isMobile ? '40px' : '30px'
                }}
              >
                Lihat
              </Button>
            </Box>

            {/* Modal Pertama */}
            {modalStage === 'main' && (
            <Portal>
              <Box
                onClick={closeAll}
                sx={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: '100vw',
                  height: '100vh',
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  backdropFilter: 'blur(6px)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  animation: 'fadeIn 0.4s ease-in-out',
                  cursor: 'pointer',
                  zIndex: 9999, // tinggi banget
                }}
              >
                <Box
                  onClick={(e) => e.stopPropagation()}
                  sx={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 2,
                    animation: 'slideIn 0.4s ease-out',
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 10000,
                  }}
                >
                  <img
                    src={Image7}
                    alt="Image 7"
                    style={{
                      width: '300px',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      position: 'relative',
                      zIndex: 10001,
                    }}
                    onClick={() => setModalStage('detail')}
                  />
                  <img
                    src={Image8}
                    alt="Image 8"
                    style={{
                      width: '300px',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      position: 'relative',
                      zIndex: 10001,
                    }}
                    onClick={() => setModalStage2('detail2')}
                  />
                </Box>
              </Box>
            </Portal>
          )}



            

            {/* Modal Kedua (Detail dari Image7) */}
            {modalStage === 'detail' && (
            <Portal>
              <Box
                onClick={closeAll}
                sx={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: '100vw',
                  height: '100vh',
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  backdropFilter: 'blur(6px)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 10000,
                  animation: 'fadeIn 0.4s ease-in-out',
                  cursor: 'pointer',
                }}
              >
                <Box
                  onClick={(e) => e.stopPropagation()}
                  sx={{
                    display: !isMobile ? 'flex' : 'block',
                    flexDirection: 'row',
                    width: !isMobile ? '40%' : '80%',
                    maxWidth: 1000,
                    backgroundColor: '#fff',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    animation: 'slideIn 0.4s ease-out',
                    boxShadow: 6,
                  }}
                >
                  {/* Kiri: Gambar */}
                  <Box sx={{ flex: 1 }}>
                    <img
                      src={Image9}
                      alt="Detail Image"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </Box>

                  {/* Kanan: Konten */}
                  <Box
                    sx={{
                      flex: 1,
                      p: 4,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                    }}
                  >
                    <Box>
                      <Typography variant="h5" sx={{ mb: 2 }}>
                        Hardening Otomatis
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#555' }}>
                        Menggunakan tools manajemen konfigurasi seperti Ansible dan Chef, kami mampu menerapkan kebijakan hardening secara terstandar, terukur, dan terdokumentasi pada banyak sistem sekaligus.
                      </Typography>
                    </Box>

                    <Button
                      onClick={closeAll}
                      variant="contained"
                      sx={{
                        mt: 2,
                        backgroundColor: '#020842',
                        '&:hover': { backgroundColor: '#030b60' },
                        textTransform: 'none',
                        alignSelf: 'flex-start',
                      }}
                    >
                      Kembali
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Portal>
          )}



      {modalStage2 === 'detail2' && (
        <Portal>
              <Box
                onClick={closeAll2}
                sx={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: '100vw',
                  height: '100vh',
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  backdropFilter: 'blur(6px)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 10000,
                  animation: 'fadeIn 0.4s ease-in-out',
                  cursor: 'pointer',
                }}
              >
                <Box
                  onClick={(e) => e.stopPropagation()}
                  sx={{
                    display: !isMobile ? 'flex' : 'block',
                    flexDirection: 'row',
                    width: !isMobile ? '40%' : '80%',
                    maxWidth: 1000,
                    backgroundColor: '#fff',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    animation: 'slideIn 0.4s ease-out',
                    boxShadow: 6,
                  }}
                >
                  {/* Kiri: Gambar */}
                  <Box sx={{ flex: 1 }}>
                    <img
                      src={Image9}
                      alt="Detail Image"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </Box>

                  {/* Kanan: Konten */}
                  <Box
                  sx={{
                      flex: 1,
                      p: 4,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                  }}
                  >
                  <Box>
                      <Typography variant="h5" sx={{ mb: 2 }}>
                      Hardening Manual
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#555' }}>
                      Untuk kebutuhan yang lebih spesifik, kami menyediakan layanan hardening berbasis skrip manual yang disesuaikan dengan karakteristik infrastruktur Anda tanpa mengabaikan aspek compliance dan integritas keamanan.
                      </Typography>
                  </Box>

                  <Button
                      onClick={closeAll2}
                      variant="contained"
                      sx={{
                      mt: 2, // Perdekat jarak (bisa ubah ke 1 kalau mau lebih nempel)
                      backgroundColor: '#020842',
                      '&:hover': { backgroundColor: '#030b60' },
                      textTransform: 'none',
                      alignSelf: 'flex-start',
                      }}
                  >
                      Kembali
                  </Button>
                  </Box>

                </Box>
              </Box>
              </Portal>
            )}

            {/* Animasi */}
            <style>{`
              @keyframes fadeIn {
                from { opacity: 0 }
                to { opacity: 1 }
              }
              @keyframes slideIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
              }
            `}</style>
      </Box>




        {/* TENGAH */}
        <Box
          sx={{
            position: 'absolute',
            top: !isMobile ? '50%' : '39%',
            left: !isMobile ? '50%' : '60%',
            transform: 'translate(-50%, -50%)',
            zIndex: !isMobile ? 1 : 0,
            maxWidth: 700, // maksimal lebar supaya nggak nabrak kiri
            width: '100%',
            pointerEvents: 'none',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img src={ !isMobile ? Image6 : Image10} style={{ width: '60%', height: 'auto' }} />
        </Box>

        {/* KANAN */}
        <Box sx={{ flex: 1, display: !isMobile ? 'flex' : 'block', justifyContent: 'flex-end', mt: isMobile ? 30 : 0 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5,
          }}
        >
          {/* Atas: 2 box */}
          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
        {[
          'Asesmen baseline dan analisis kesenjangan terhadap CIS Benchmark',
          'Penyusunan dan implementasi rencana remidiasi',
        ].map((label, index) => (
          <Box
            className="headline-menu2"
            key={index}
            sx={{
              color: 'white',
              px: 2,
              py: 1,
              fontWeight: 'bold',
              fontSize: 14,
              minWidth: !isMobile ? 200 : 150,
              height: 200,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay',
              ...(index === 0 && {
                backgroundImage: `url(${Image1})`,
                borderTopLeftRadius: 16,
                borderBottomLeftRadius: 16,
              }),
              ...(index === 1 && {
                backgroundImage: `url(${Image2})`,
                borderTopRightRadius: 16,
                borderBottomRightRadius: 16,
              }),
            }}
          >
            {label}
          </Box>
        ))}
      </Box>

          {/* Tengah: 1 box */}
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              className="headline-menu2"
              sx={{
                color: 'white',
                px: 2,
                py: 1,
                borderRadius: 2,
                fontWeight: 'bold',
                fontSize: 14,
                width: 200,
                height: 200,
                display: 'flex',
                alignItems: 'center',
                backgroundImage: `url(${Image3})`,
                justifyContent: 'center',
                textAlign: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay',
              }}
            >
              Penerapan template konfigurasi yang aman
            </Box>
          </Box>

          {/* Bawah: 2 box */}
          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
        {[
          'Validasi kepatuhan dan pelaporan hasil',
          'Monitoring berkelanjutan dan evaluasi berkala',
        ].map((label, index) => (
          <Box
            className="headline-menu2"
            key={index}
            sx={{
              color: 'white',
              px: 2,
              py: 1,
              fontWeight: 'bold',
              fontSize: 14,
              minWidth: !isMobile ? 200 : 150,
              height: 200,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay',
              ...(index === 0 && {
                backgroundImage: `url(${Image4})`,
                borderTopLeftRadius: 16,
                borderBottomLeftRadius: 16,
              }),
              ...(index === 1 && {
                backgroundImage: `url(${Image5})`,
                borderTopRightRadius: 16,
                borderBottomRightRadius: 16,
              }),
            }}
          >
            {label}
          </Box>
        ))}
      </Box>
        </Box>
      </Box>
      </Box>
    </Box>

    

    <Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '50vh',
    backgroundColor: '#f0f8ff',
    width: '100%',
    overflowX: 'hidden',
    overflowY: 'hidden',
    position: 'relative',
    top: !isMobile ? 200 : 100,
    boxSizing: 'border-box',
  }}
>
  {/* Judul */}
  <Typography
  id="support2"
  className="headline-menu2"
  sx={{
    zIndex: 1,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2d465e',
    lineHeight: 1.2,
    // opacity: visible.top ? 1 : 0,
    textAlign: 'left',
    alignSelf: isMobile ? 'center' : 'flex-start', // ubah alignSelf saat mobile
    mx: isMobile ? 'auto' : 0,                     // tengah secara horizontal saat mobile
    px: !isMobile ? 23 : 0,
    width: isMobile ? 300 : '100%',
    marginTop: 10
  }}
>
  Layanan Standby untuk Stabilitas Sistem Harian
</Typography>


  {/* Deskripsi */}
  <Typography
    className="headline-menu2"
    sx={{
      zIndex: 1,
      width: '40%',
      fontSize: 15,
      position: 'relative',
      top: 10,
      color: '#2d465e',
      // lineHeight: 1.2,
      // opacity: visible.top ? 1 : 0,
      textAlign: 'left',
      alignSelf: isMobile ? 'center' : 'flex-start', // ubah alignSelf saat mobile
      mx: isMobile ? 'auto' : 0, 
      px: !isMobile ? 23 : 0,
      width: isMobile ? 300 : '40%',
    }}
  >
    Selain menyediakan layanan solusi dan hardening, kami juga menyediakan dukungan operasional IT 
    harian melalui tim standby yang profesional dan responsif untuk memastikan seluruh kebutuhan 
    infrastruktur teknologi informasi pelanggan dapat berjalan secara optimal tanpa gangguan
  </Typography>

  {/* Carousel */}
  <Box
    sx={{
      px: 4,
      py: 3,
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderRadius: 4,
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
      width: '100%',
      maxWidth: '100%',
      height: '700px',
      textAlign: 'center',
      position: 'relative',
      top: 50,
      overflowX: 'hidden',
      overflowY: 'hidden',
      scrollBehavior: 'smooth',
      '&:hover': {
        overflowX: 'auto',
      },
    }}
  >
    <Box
      ref={carouselRef}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: 4,
        width: 'fit-content',
        margin: '0 auto',
        transition: 'transform 0.3s ease-in-out',
      }}
    >
{[...Array(4)].map((_, index) => {
  return (
<Box 
  className='box-point'
  key={index}
  sx={{
    minWidth: !isMobile ? 400 : 300,
    maxWidth: !isMobile ? 400 : 200,
    height: !isMobile ? 600 : 400,
    backgroundColor: " #26d0ce)",
    color: "#000000",
    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
    p: 2,
    // textAlign: 'left',
    flexShrink: 0,
    transition: 'transform 0.3s ease-in-out',
    overflow: 'hidden',
    '&:hover': {
      transform: 'scale(1.05)',
    },
    position: 'relative',
    left: !isMobile ? 0 : 25
  }}
>
<Box
  sx={{
    position: 'relative',
    borderRadius: 2,
    p: 2,
    mt: 2,
    height: '90%',
    width: '92%',
    maxWidth: '100%',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0, 123, 255, 0.3)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  }}
  onMouseEnter={(e) => {
    const video = e.currentTarget.querySelector('video');
    if (video && video.readyState >= 2) {
      video.play().catch(err => {
        console.log("Play error:", err);
      });
    }
  }}
  onMouseLeave={(e) => {
    const video = e.currentTarget.querySelector('video');
    if (video) {
      video.pause();
      // Biarkan delay sedikit agar tidak memicu race condition
      setTimeout(() => {
        video.currentTime = 10;
      }, 200);
    }
  }}
>

    {/* VIDEO + TEXT OVERLAY */}
    {index === 0 && (
      <>
        <video
          src={video2}
          muted
          loop
          playsInline
          onLoadedMetadata={(e) => {
            e.currentTarget.currentTime = 10;
          }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '8px',
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 3,
            color: '#fff',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            textShadow: '0 0 10px rgba(0,0,0,0.5)',
            textAlign: 'center',
            px: 2,
          }}
        >
          <Box
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi transparan hitam
              padding: '8px 16px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              backdropFilter: 'blur(4px)', // blur latar belakang
              display: 'inline-block',
            }}
          >
            <Typography
              className="headline-menu2"
              sx={{
                fontSize: 30,
                color: '#fff',
                fontWeight: 'bold',
              }}
            >
              Server Operations Support
            </Typography>
          </Box>
          <Button
          onClick={(e) => {
            e.stopPropagation(); // cegah event bubbling
            setModalStage3('detail-sos');
          }}
          variant="contained"
          sx={{
            top: 40,
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: '#fff',
            fontWeight: 'bold',
            borderRadius: '999px',
            px: 4,
            py: 1.5,
            fontSize: '1rem',
            textTransform: 'none',
            boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
            width: 50,
            height: 50,
            minWidth: 0,
            transition: 'color 0.3s ease',
            '&:hover': {
              color: '#000',
            },
            '&::before': {
              content: '""',
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              height: '100%',
              backgroundColor: '#26d0ce',
              transform: 'scaleY(0)',
              transformOrigin: 'bottom',
              transition: 'transform 0.4s ease',
              zIndex: 0,
            },
            '&:hover::before': {
              transform: 'scaleY(1)',
            },
            '& .MuiButton-startIcon': {
              position: 'relative',
              zIndex: 1,
            },
            '& img': {
              position: 'relative',
              zIndex: 1,
            },
          }}
        >
          <img src={UpArrow} width={20} />
        </Button>


        </Box>
      </>
    )}

    {index === 1 && (
      <>
      <video
        src={video3}
        muted
        loop
        playsInline
        onLoadedMetadata={(e) => {
          e.currentTarget.currentTime = 10;
        }}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '8px',
          zIndex: 1,
        }}
      />
      <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 3,
            color: '#fff',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            textShadow: '0 0 10px rgba(0,0,0,0.5)',
            textAlign: 'center',
            px: 2,
          }}
        >
          <Box
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi transparan hitam
              padding: '8px 16px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              backdropFilter: 'blur(4px)', // blur latar belakang
              display: 'inline-block',
            }}
          >
            <Typography
              className="headline-menu2"
              sx={{
                fontSize: 30,
                color: '#fff',
                fontWeight: 'bold',
              }}
            >
              Jaringan & Firewall
            </Typography>
            </Box>
            <Button
            onClick={(e) => {
              e.stopPropagation(); // cegah event bubbling
              setModalStage4('detail-jf');
            }}
            variant="contained"
            sx={{
              top: 40,
              position: 'relative',
              overflow: 'hidden', // biar ::before tidak keluar dari button
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: '#fff',
              fontWeight: 'bold',
              borderRadius: '999px',
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              textTransform: 'none',
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
              width: 50,
              height: 50,
              minWidth: 0,
              transition: 'color 0.3s ease',
              '&:hover': {
                color: '#000', // biar kontras saat hover
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                left: 0,
                bottom: 0,
                width: '100%',
                height: '100%',
                backgroundColor: '#26d0ce',
                transform: 'scaleY(0)',
                transformOrigin: 'bottom',
                transition: 'transform 0.4s ease',
                zIndex: 0,
              },
              '&:hover::before': {
                transform: 'scaleY(1)',
              },
              '& .MuiButton-startIcon': {
                position: 'relative',
                zIndex: 1,
              },
              '& img': {
                position: 'relative',
                zIndex: 1,
              },
            }}
          >
            <img src={UpArrow} width={20} />
          </Button>
        </Box>
      </>
    )}

    {index === 2 && (
      <>
      <video
        src={video4}
        muted
        loop
        playsInline
        onLoadedMetadata={(e) => {
          e.currentTarget.currentTime = 10;
        }}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '8px',
          zIndex: 1,
        }}
      />
      <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 3,
            color: '#fff',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            textShadow: '0 0 10px rgba(0,0,0,0.5)',
            textAlign: 'center',
            px: 2,
          }}
        >
          <Box
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi transparan hitam
              padding: '8px 16px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              backdropFilter: 'blur(4px)', // blur latar belakang
              display: 'inline-block',
            }}
          >
            <Typography
              className="headline-menu2"
              sx={{
                fontSize: 30,
                color: '#fff',
                fontWeight: 'bold',
              }}
            >
              HelpDesk Support
            </Typography>
          </Box>
          <Button
            onClick={(e) => {
              e.stopPropagation(); // cegah event bubbling
              setModalStage5('detail-hs');
            }}
            variant="contained"
            sx={{
              top: 40,
              position: 'relative',
              overflow: 'hidden', // biar ::before tidak keluar dari button
              backgroundColor: ' rgba(0, 0, 0, 0.5)',
              color: '#fff',
              fontWeight: 'bold',
              borderRadius: '999px',
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              textTransform: 'none',
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
              width: 50,
              height: 50,
              minWidth: 0,
              transition: 'color 0.3s ease',
              '&:hover': {
                color: '#000', // biar kontras saat hover
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                left: 0,
                bottom: 0,
                width: '100%',
                height: '100%',
                backgroundColor: '#26d0ce',
                transform: 'scaleY(0)',
                transformOrigin: 'bottom',
                transition: 'transform 0.4s ease',
                zIndex: 0,
              },
              '&:hover::before': {
                transform: 'scaleY(1)',
              },
              '& .MuiButton-startIcon': {
                position: 'relative',
                zIndex: 1,
              },
              '& img': {
                position: 'relative',
                zIndex: 1,
              },
            }}
          >
            <img src={UpArrow} width={20} />
          </Button>
        </Box>
      </>
    )}

    {index === 3 && (
      <>
      <video
        src={video5}
        muted
        loop
        playsInline
        onLoadedMetadata={(e) => {
          e.currentTarget.currentTime = 10;
        }}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '8px',
          zIndex: 1,
        }}
      />
      <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 3,
            color: '#fff',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            textShadow: '0 0 10px rgba(0,0,0,0.5)',
            textAlign: 'center',
            px: 2,
          }}
        >
          <Box
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi transparan hitam
              padding: '8px 16px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              backdropFilter: 'blur(4px)', // blur latar belakang
              display: 'inline-block',
            }}
          >
            <Typography
              className="headline-menu2"
              sx={{
                fontSize: 30,
                color: '#fff',
                fontWeight: 'bold',
              }}
            >
              IT Standby Services
            </Typography>
          </Box>
          <Button
            onClick={(e) => {
              e.stopPropagation(); // cegah event bubbling
              setModalStage6('detail-iss');
            }}
            variant="contained"
            sx={{
              top: 40,
              position: 'relative',
              overflow: 'hidden', // biar ::before tidak keluar dari button
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: '#fff',
              fontWeight: 'bold',
              borderRadius: '999px',
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              textTransform: 'none',
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
              width: 50,
              height: 50,
              minWidth: 0,
              transition: 'color 0.3s ease',
              '&:hover': {
                color: '#000', // biar kontras saat hover
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                left: 0,
                bottom: 0,
                width: '100%',
                height: '100%',
                backgroundColor: '#26d0ce',
                transform: 'scaleY(0)',
                transformOrigin: 'bottom',
                transition: 'transform 0.4s ease',
                zIndex: 0,
              },
              '&:hover::before': {
                transform: 'scaleY(1)',
              },
              '& .MuiButton-startIcon': {
                position: 'relative',
                zIndex: 1,
              },
              '& img': {
                position: 'relative',
                zIndex: 1,
              },
            }}
          >
            <img src={UpArrow} width={20} />
          </Button>
        </Box>
      </>
    )}

    {/* GLASS EFFECT overlay */}
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(1px)',
        WebkitBackdropFilter: 'blur(1px)',
        borderRadius: '8px',
        zIndex: 2,
        pointerEvents: 'none',
      }}
    />
  </Box>
</Box>
  )
})}
    </Box>
  </Box>
</Box>

{modalStage3 === 'detail-sos' && (
         <Portal>
              <Box
                onClick={closeAll3}
                sx={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: '100vw',
                  height: '100vh',
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  backdropFilter: 'blur(6px)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 10000,
                  animation: 'fadeIn 0.4s ease-in-out',
                  cursor: 'pointer',
                }}
              >
                <Box
                  onClick={(e) => e.stopPropagation()}
                  sx={{
                    display: !isMobile ? 'flex' : 'block',
                    flexDirection: 'row',
                    width: !isMobile ? '40%' : '80%',
                    maxWidth: 1000,
                    backgroundColor: '#fff',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    animation: 'slideIn 0.4s ease-out',
                    boxShadow: 6,
                  }}
                >
                  {/* Kiri: Gambar */}
                  <Box sx={{ flex: 1 }}>
                    <img
                      src={Image9}
                      alt="Detail Image"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </Box>

                  {/* Kanan: Konten */}
                  <Box
                  sx={{
                      flex: 1,
                      p: 4,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                  }}
                  >
                  <Box>
                      <Typography variant="h5" sx={{ mb: 2, textAlign: 'left' }}>
                       Server Operations Support
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#555', textAlign: 'left' }}>
                      Pemantauan (monitoring) sistem server level 1 (L1), penanganan insiden awal, serta eskalasi terstruktur untuk kasus lanjut.
                      </Typography>
                  </Box>

                  <Button
                      onClick={closeAll3}
                      variant="contained"
                      sx={{
                      mt: 2, // Perdekat jarak (bisa ubah ke 1 kalau mau lebih nempel)
                      backgroundColor: '#020842',
                      '&:hover': { backgroundColor: '#030b60' },
                      textTransform: 'none',
                      alignSelf: 'flex-start',
                      }}
                  >
                      Kembali
                  </Button>
                  </Box>

                </Box>
              </Box>
              </Portal>
            )}

{modalStage4 === 'detail-jf' && (
              <Box
                onClick={closeAll4}
                sx={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: '100vw',
                  height: '100vh',
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  backdropFilter: 'blur(6px)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 10000,
                  animation: 'fadeIn 0.4s ease-in-out',
                  cursor: 'pointer',
                }}
              >
                <Box
                  onClick={(e) => e.stopPropagation()}
                  sx={{
                    display: !isMobile ? 'flex' : 'block',
                    flexDirection: 'row',
                    width: !isMobile ? '40%' : '80%',
                    maxWidth: 1000,
                    backgroundColor: '#fff',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    animation: 'slideIn 0.4s ease-out',
                    boxShadow: 6,
                  }}
                >
                  {/* Kiri: Gambar */}
                  <Box sx={{ flex: 1 }}>
                    <img
                      src={Image9}
                      alt="Detail Image"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </Box>

                  {/* Kanan: Konten */}
                  <Box
                  sx={{
                      flex: 1,
                      p: 4,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                  }}
                  >
                  <Box>
                      <Typography variant="h5" sx={{ mb: 2, textAlign: 'left' }}>
                       Jaringan dan Firewall
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#555', textAlign: 'left' }}>
                      Pemeliharaan, pemantauan, serta troubleshooting jaringan dan firewall untuk menjaga ketersediaan dan keamanan konektivitas internal maupun eksternal.
                      </Typography>
                  </Box>

                  <Button
                      onClick={closeAll4}
                      variant="contained"
                      sx={{
                      mt: 2, // Perdekat jarak (bisa ubah ke 1 kalau mau lebih nempel)
                      backgroundColor: '#020842',
                      '&:hover': { backgroundColor: '#030b60' },
                      textTransform: 'none',
                      alignSelf: 'flex-start',
                      }}
                  >
                      Kembali
                  </Button>
                  </Box>

                </Box>
              </Box>
            )}


{modalStage5 === 'detail-hs' && (
              <Box
                onClick={closeAll5}
                sx={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: '100vw',
                  height: '100vh',
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  backdropFilter: 'blur(6px)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 10000,
                  animation: 'fadeIn 0.4s ease-in-out',
                  cursor: 'pointer',
                }}
              >
                <Box
                  onClick={(e) => e.stopPropagation()}
                  sx={{
                    display: !isMobile ? 'flex' : 'block',
                    flexDirection: 'row',
                    width: !isMobile ? '40%' : '80%',
                    maxWidth: 1000,
                    backgroundColor: '#fff',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    animation: 'slideIn 0.4s ease-out',
                    boxShadow: 6,
                  }}
                >
                  {/* Kiri: Gambar */}
                  <Box sx={{ flex: 1 }}>
                    <img
                      src={Image9}
                      alt="Detail Image"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </Box>

                  {/* Kanan: Konten */}
                  <Box
                  sx={{
                      flex: 1,
                      p: 4,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                  }}
                  >
                  <Box>
                      <Typography variant="h5" sx={{ mb: 2, textAlign: 'left' }}>
                       HelpDesk Support
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#555', textAlign: 'left' }}>
                      Penanganan keluhan pengguna, perbaikan perangkat lunak/keras dasar (first-level repair), dan dokumentasi solusi yang sistematis.
                      </Typography>
                  </Box>

                  <Button
                      onClick={closeAll5}
                      variant="contained"
                      sx={{
                      mt: 2, // Perdekat jarak (bisa ubah ke 1 kalau mau lebih nempel)
                      backgroundColor: '#020842',
                      '&:hover': { backgroundColor: '#030b60' },
                      textTransform: 'none',
                      alignSelf: 'flex-start',
                      }}
                  >
                      Kembali
                  </Button>
                  </Box>

                </Box>
              </Box>
            )}

{modalStage6 === 'detail-iss' && (
              <Box
                onClick={closeAll6}
                sx={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: '100vw',
                  height: '100vh',
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  backdropFilter: 'blur(6px)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 10000,
                  animation: 'fadeIn 0.4s ease-in-out',
                  cursor: 'pointer',
                }}
              >
                <Box
                  onClick={(e) => e.stopPropagation()}
                  sx={{
                    display: !isMobile ? 'flex' : 'block',
                    flexDirection: 'row',
                    width: !isMobile ? '40%' : '80%',
                    maxWidth: 1000,
                    backgroundColor: '#fff',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    animation: 'slideIn 0.4s ease-out',
                    boxShadow: 6,
                  }}
                >
                  {/* Kiri: Gambar */}
                  <Box sx={{ flex: 1 }}>
                    <img
                      src={Image9}
                      alt="Detail Image"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </Box>

                  {/* Kanan: Konten */}
                  <Box
                  sx={{
                      flex: 1,
                      p: 4,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                  }}
                  >
                  <Box>
                      <Typography variant="h5" sx={{ mb: 2, textAlign: 'left' }}>
                       IT Standby Services
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#555', textAlign: 'left' }}>
                      Penempatan tim teknis secara dedikatif maupun on-demand, baik onsite maupun remote, untuk memastikan setiap permasalahan IT dapat ditangani dengan cepat dan tepat.
                      </Typography>
                  </Box>

                  <Button
                      onClick={closeAll6}
                      variant="contained"
                      sx={{
                      mt: 2, // Perdekat jarak (bisa ubah ke 1 kalau mau lebih nempel)
                      backgroundColor: '#020842',
                      '&:hover': { backgroundColor: '#030b60' },
                      textTransform: 'none',
                      alignSelf: 'flex-start',
                      }}
                  >
                      Kembali
                  </Button>
                  </Box>

                </Box>
              </Box>
            )}


<Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '60vh',
    backgroundColor: '#f0f8ff',
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
    top: !isMobile ? 200 : 0,
    boxSizing: 'border-box',
  }}
>
  {/* Hanya tampil jika !isMobile */}
  {!isMobile && (
  <>
    {/* Ball image di kiri bawah belakang */}
    <Box
      component="img"
      src={Ball}
      alt="Ball"
      sx={{
        position: 'absolute',
        left: 80,
        bottom: 70,
        width: 100,
        zIndex: 1,
        opacity: 0.4,
      }}
    />

    {/* Ball image di kanan atas belakang Team */}
    <Box
      component="img"
      src={Ball}
      alt="Ball Top Right"
      sx={{
        position: 'absolute',
        left: 500, // Adjust based on Team's left + some offset
        bottom: 400, // Higher than Team
        width: 100,
        zIndex: 1,
        opacity: 0.4,
      }}
    />

    {/* Team image di depan */}
    <Box
      component="img"
      src={Team}
      alt="Team"
      sx={{
        position: 'absolute',
        left: 100,
        bottom: 0,
        top: 80,
        width: 500,
        zIndex: 2,
      }}
    />
  </>
)}


  <Box
    sx={{
      width: isMobile ? '80%' : '40%',
      textAlign: !isMobile ? 'right' : 'left',
      px: isMobile ? 0 : 23,
      ml: !isMobile ? 'auto' : '20px',
      height: isMobile ? 1000 : 500
    }}
  >
    <Typography
    id="support3"
      className="headline-menu2"
      sx={{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#2d465e',
        lineHeight: 1.2,
        // opacity: visible.top ? 1 : 0,
        marginBottom: 2,
      }}
    >
      Layanan Sistem Fleksibel, Aman, dan Teruji
    </Typography>

    <Typography
      className="headline-menu2"
      sx={{
        fontSize: 15,
        color: '#2d465e',
        lineHeight: 1.6,
        // opacity: visible.top ? 1 : 0,
      }}
    >
      Selain menyediakan layanan solusi dan hardening, kami juga menyediakan dukungan operasional IT 
      harian melalui tim standby yang profesional dan responsif untuk memastikan seluruh kebutuhan 
      infrastruktur teknologi informasi pelanggan dapat berjalan secara optimal tanpa gangguan.
    </Typography>

    <Box
  sx={{
    display: 'flex',
    justifyContent: 'center',
    mt: 2,
    flexDirection: isMobile ? 'column' : 'row',
  }}
>
  {/* Box 1 */}
  <Box
  sx={{
    flex: 2,
    maxWidth: '250px',
    minWidth: '150px',
    background: 'linear-gradient(90deg, #add8e6,rgb(128, 172, 255), #add8e6)',
    backgroundSize: '300% 100%',
    animation: 'shimmerColor 6s ease-in-out infinite',
    padding: 2,
    borderRadius: 2,
    boxShadow: 2,
    minHeight: 100,
  }}  
>

    <Typography className="headline-menu2" fontWeight="bold" fontSize={18} mb={1} color="white">
      Migrasi Infrastruktur
    </Typography>
    <Typography className="headline-menu2" fontSize={14} color="white" component="div">
      <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
        <li style={{ marginBottom: '8px' }}>
          Migrasi dari <strong>on-premise ke cloud</strong> (AWS, Azure, GCP, dan lainnya)
        </li>
        <li style={{ marginBottom: '8px' }}>
          Migrasi lintas sistem operasi, seperti dari <strong>Windows ke Linux</strong> atau sebaliknya
        </li>
        <li style={{ marginBottom: '8px' }}>
          <strong>In-place OS Upgrade</strong> tanpa mengganggu layanan utama
        </li>
        <li style={{ marginBottom: '8px' }}>
          Migrasi <strong>mail server</strong>, termasuk dukungan konfigurasi dan pemeliharaan layanan email
        </li>
      </ul>
    </Typography>

  </Box>

  {/* Box 2 */}
  <Box
    sx={{
      flex: 2,
      maxWidth: '250px',
      minWidth: '150px',
      backgroundColor: '#ffffff',
      padding: 2,
      borderRadius: 2,
      boxShadow: 2,
      minHeight: 100,
      ml: !isMobile ? 1 : 0, // jarak antara box 1 & 2
      position: 'relative',
      top: isMobile ? 30 : 0
    }}
  >
    <Typography className="headline-menu2" fontWeight="bold" fontSize={18} mb={1} color="#2d465e">
      Keamanan Terjamin
    </Typography>
    <Typography className="headline-menu2" fontSize={14} color="#2d465e" component="div">
      <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
        <li style={{ marginBottom: '8px' }}>
         <strong> Penerapan patch keamanan dan pembaruan sistem operasi </strong> secara terjadwal dan terdokumentasi
        </li>
        <li style={{ marginBottom: '8px' }}>
         <strong> Manajemen backup </strong> aplikasi maupun database (harian, mingguan, incremental/full) sesuai dengan kebijakan Disaster Recovery dan Business Continuity Plan (BCP)
        </li>
      </ul>
    </Typography>
  </Box>
</Box>
  </Box>
</Box>


<Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '0 auto',
          width: '80%',
          height: !isMobile  ? '800px' : '1350px',
          padding: 4,
          backgroundColor: 'white',
          borderRadius: 2,
          overflow: 'hidden',
          top: !isMobile ? 300 : 50,
          marginBottom: 0,

        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          height: '10px',
          width: '100%',
          background: 'linear-gradient(270deg, #0d83fd, orange, #0d83fd)',
          backgroundSize: '600% 600%',
          animation: 'gradientShift 6s ease infinite',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '10px',
          width: '100%',
          background: 'linear-gradient(to right, orange, #0d83fd)',
          backgroundSize: '600% 600%',
          animation: 'gradientShift 6s ease infinite',
        },

        '@keyframes gradientShift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        '@keyframes fadeInUp': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        '@keyframes fadeInLeft': {
          '0%': { opacity: 0, transform: 'translateX(-50px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        '@keyframes fadeInRight': {
          '0%': { opacity: 0, transform: 'translateX(50px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      }}
    >
      {/* Top Typography */}
      <Typography
      id="support4"
      className="headline-menu2"
        sx={{
          zIndex: 1,
          fontSize: 30,
          fontWeight: 'bold',
          color: '#2d465e',
          lineHeight: 1.2,
          position: 'relative',
          top: 0

        }}
      >
        Tim Berpengalaman & Dukungan Penuh Harian Serta Proyek
      </Typography>
      <KeyboardArrowDownIcon
      sx={{
        fontSize: 40,
        color: '#0d83fd',
        marginTop: 2,
        animation: 'bounceDown 2s infinite',
      }}
    />
      <Box
  sx={{
    background: 'linear-gradient(135deg,rgb(87, 166, 251), #add8e6)',
    borderRadius: 2,
    boxShadow: 3,
    marginTop: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
    fontWeight: 'bold',
    color: '#333',
    maxWidth: !isMobile ? '30%' : '90%',
    textAlign: 'center',
    animation: 'sideShift 3s ease-in-out infinite',
  }}
>
  <Typography className="headline-menu2" color="white">
  Tim kami terdiri dari System Administrator (SysAdmin) profesional yang memiliki keahlian tinggi dan pengalaman luas dalam mengelola berbagai jenis sistem operasi dan platform, baik dalam skala harian maupun proyek khusus.
  </Typography>
</Box>

  {isMobile && (
    <KeyboardArrowDownIcon
    sx={{
      fontSize: 40,
      color: '#0d83fd',
      marginTop: 2,
      animation: 'bounceDown 2s infinite',
    }}
  />
  )}

<Box
  sx={{
    display: !isMobile ? 'flex' : 'block',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    position: 'relative',
    top: !isMobile ? 100 : 50,
    flexWrap: 'wrap',
  }}
>
    <Box
      sx={{
        flex: 2,
        maxWidth: '250px',
        minWidth: '150px',
        background: 'linear-gradient(90deg, #add8e6,rgb(128, 172, 255), #add8e6)',
        backgroundSize: '300% 100%',
        animation: 'shimmerColor 6s ease-in-out infinite',
        padding: 2,
        borderRadius: 2,
        boxShadow: 2,
        minHeight: 100,
      }}  
    >
    <Typography className="headline-menu2" fontWeight="bold" fontSize={18} mb={1} color="white">Kami menguasai sistem operasi berikut secara menyeluruh</Typography>
    <Typography className="headline-menu2" fontSize={14} color="white" component="div">
      <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
        <li style={{ marginBottom: '8px' }}>
          Linux: Semua distribusi utama (Ubuntu, Debian, CentOS, RHEL, SUSE, Rocky, dll.)
        </li>
        <li style={{ marginBottom: '8px' }}>
          Unix Enterprise: AIX (IBM) dan Oracle Solaris
        </li>
        <li style={{ marginBottom: '8px' }}>
          Windows Server: Semua versi, termasuk integrasi dengan Active Directory, Group Policy, dan PowerShell automation
        </li>
      </ul>
    </Typography>
  </Box>

  {isMobile && (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 2,
    }}
  >
    <KeyboardArrowDownIcon
      sx={{
        fontSize: 40,
        color: '#0d83fd',
        animation: 'bounceDown 2s infinite',
      }}
    />
  </Box>
)}

  <Box
      sx={{
        flex: 2,
        maxWidth: '250px',
        minWidth: '150px',
        background: 'linear-gradient(90deg, #add8e6,rgb(128, 172, 255), #add8e6)',
        backgroundSize: '300% 100%',
        animation: 'shimmerColor 6s ease-in-out infinite',
        padding: 2,
        borderRadius: 2,
        boxShadow: 2,
        minHeight: 300,
        position: 'relative',
        top: isMobile ? 20 : 0
      }}  
    >
     <Typography className="headline-menu2" fontWeight="bold" fontSize={18} mb={1} color="white">Kami siap menyediakan layanan dalam bentuk</Typography>
    <Typography className="headline-menu2" fontSize={14} color="white" component="div">
      <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
        <li style={{ marginBottom: '8px' }}>
         Daily Operational Support: Monitoring, maintenance, troubleshooting, dan task operasional lainnya secara berkelanjutan
        </li>
        <li style={{ marginBottom: '8px' }}>
         Project-Based Support: Deployment, migration, optimization, dan integrasi sistem sesuai kebutuhan proyek spesifik
        </li>
      </ul>
    </Typography>
  </Box>
</Box>

<Box
  sx={{
    display: !isMobile ? 'flex' : 'block',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'relative',
    top: !isMobile ? -80 : -320, 
    width: '100%',
    maxWidth: '1000px',
    mx: 'auto',
    px: 2,
  }}
>
  {/* Gambar Woman dan Icon12 */}
  {!isMobile && (
   <Box sx={{ 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center',
    }}>
    <Box
      component="img"
      src={Woman}
      alt="Woman"
      sx={{
        width: 320,
        height: 'auto',
        position: 'relative',
        top: 0
      }}
    />
  </Box>
  )}
  
  {/* Gambar Man dan Icon13 */}
  {!isMobile && (
   <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
   <Box
     component="img"
     src={Man}
     alt="Man"
     sx={{
       width: 350,
       height: 'auto',
     }}
   />
 </Box>
  )}
  
</Box>


   
    </Box>


<Box sx={{
    width: isMobile ? '77%' : "95%",
    height: !isMobile ? 400 : "auto",
    position: 'relative',
    top: isMobile ? '100px' : 500,
    backgroundColor: "#1f2123",
    bottom: !isMobile ? -100 : 0,
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px"
}}>
    <Grid container spacing={5} maxWidth="lg">
        {/* Kolom 1 */}
        <Grid item xs={12} md={3}>
            <Typography className="title-footer" variant="h6" fontWeight="bold" mb={2}>Product</Typography>
            <Typography className="menu-footer">Pricing</Typography>
            <Typography className="menu-footer">Benefits</Typography>
            <Typography className="menu-footer">Features</Typography>
            <Typography className="menu-footer">Product Demo</Typography>
            <Typography className="menu-footer">Visual Builder</Typography>
            <Typography className="menu-footer">Dynamic</Typography>
        </Grid>

        {/* Kolom 2 */}
        <Grid item xs={12} md={3}>
            <Typography className="title-footer" variant="h6" fontWeight="bold" mb={2}>Solutions</Typography>
            <Typography className="menu-footer">Marketing</Typography>
            <Typography className="menu-footer">Customer Support</Typography>
            <Typography className="menu-footer">Sales</Typography>
            <Typography className="menu-footer">Education</Typography>
            <Typography className="menu-footer">Course</Typography>
            <Typography className="menu-footer">Career</Typography>
        </Grid>

        {/* Kolom 3 */}
        <Grid item xs={12} md={3}>
            <Typography className="title-footer" variant="h6" fontWeight="bold" mb={2}>Integrations</Typography>
            <Typography className="menu-footer">Chat Widget</Typography>
            <Typography className="menu-footer">LiveChat</Typography>
            <Typography className="menu-footer">HelpDesk</Typography>
            <Typography className="menu-footer">Facebook Messenger</Typography>
            <Typography className="menu-footer">Shopify</Typography>
            <Typography className="menu-footer">Slack</Typography>
        </Grid>

        {/* Kolom 4 */}
        <Grid item xs={12} md={3}>
            <Typography className="title-footer" variant="h6" fontWeight="bold" mb={2}>Resources</Typography>
            <Typography className="menu-footer">Help Center</Typography>
            <Typography className="menu-footer">API & Developers</Typography>
            <Typography className="menu-footer">ChatBot Academy</Typography>
            <Typography className="menu-footer">Blog</Typography>
            <Typography className="menu-footer">Chatbot Best Practices</Typography>
            <Typography className="menu-footer">System Status</Typography>
        </Grid>
    </Grid>
</Box>



<Fab
            sx={{
                position: "fixed",
                bottom: 20,
                right: 20,
                backgroundColor: "#25D366",
                color: "white",
                "&:hover": { backgroundColor: "#1EBE5D" },
            }}
            onClick={handleClick}
        >
            <WhatsAppIcon sx={{ fontSize: 30 }} />
        </Fab>




        {!isMobile ?
                    <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
                        <Box sx={{ width: 550, textAlign: "center", p: 2, mt: 15 }}>
                            
                            {/* Tambahkan Gambar */}
                            <img 
                            src={logo}  
                            alt="Logo"
                            style={{ width: 220, height: "auto", display: "block", marginBottom: 10 }} 
                            />
        
                            {/* Deskripsi */}
                            <Typography className="deskripsi-drawer" sx={{ fontSize: '13px' }}>
                             < FormattedMessage id="drawer-deskripsi" />
                            </Typography>
        
                            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2, mr: '200px' }}>
                            <List>
                                {menuItems.map((item) => (
                                <ListItem 
                                    button 
                                    key={item.text} 
                                    onClick={() => setOpen(false)} 
                                    component={Link} 
                                    to={item.path}
                                >
                                    <ListItemText className="menu-drawer" primaryTypographyProps={{ fontSize: '39px' }} primary={item.text} />
                                </ListItem>
                                ))}
                            </List>
                            </Box>
        
                            <Box sx={{ display: 'flex', mt: 10, gap: 2 }}>
                                <Typography className="info-drawer" sx={{ fontSize: '17px' }}>< FormattedMessage id="hubungi-kami" /> :</Typography>
                                <Typography className="info-drawer" sx={{ fontSize: '17px' }}>084374384643</Typography>
                                <Typography className="info-drawer" sx={{ fontSize: '17px' }}>|</Typography>
                                <Typography className="info-drawer" sx={{ fontSize: '17px' }}>lindantech@gmail.com</Typography>
                            </Box>
        
                            <Box sx={{ display: 'flex', mt: 5, gap: 2 }}>
                                <Typography className="social-drawer" sx={{ fontSize: '17px' }}>Facebook</Typography>
                                <Typography className="social-drawer" sx={{ fontSize: '17px' }}>Instagram</Typography>
                                <Typography className="social-drawer" sx={{ fontSize: '17px' }}>Linkedin</Typography>
                                <Typography className="social-drawer" sx={{ fontSize: '17px' }}>Youtube</Typography>
                            </Box>
        
                        </Box>
                    </Drawer>
                    : 
                        <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
                            <Box sx={{ width: 300, textAlign: "center", p: 2, mt: 5 }}>
                                
                                {/* Tambahkan Gambar */}
                                <img 
                                src={logo}  
                                alt="Logo"
                                style={{ width: 220, height: "auto", display: "block", marginBottom: 10 }} 
                                />
        
                                {/* Deskripsi */}
                                <Typography className="deskripsi-drawer" sx={{ fontSize: '13px' }}>
                                 < FormattedMessage id="drawer-deskripsi" />
                                </Typography>
        
                                <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2, mr: !isMobile ? "60px" : "30px"}}>
                                <List>
                                    {menuItems2.map((item) => (
                                    <ListItem
                                    button
                                    key={item.text}
                                    onClick={(e) => {
                                        setOpen(false);
                                        e.preventDefault();
                                    
                                        if (item.id) {
                                            setTimeout(() => {
                                                const element = document.getElementById(item.id);
                                                if (element) {
                                                    const yOffset = element.getBoundingClientRect().top + window.scrollY - 50;
                                                    window.scrollTo({ top: yOffset, behavior: "smooth" });
                                                }
                                            }, 100);
                                        } else if (item.path) {
                                            window.location.href = item.path; // Navigasi ke path
                                        }
                                    }}
                                    
                                >
                                    <ListItemText
                                    className="menu-drawer"
                                    primaryTypographyProps={{ fontSize: "35px" }}
                                    primary={item.text}
                                    />
                                </ListItem>
                                    ))}
                                <Box position="relative" display="flex" alignItems="center" gap={1}>
                                    {/* Tombol Menu */}
                                    <Button sx={{ cursor: "pointer", display: "flex", alignItems: "center" }} onClick={() => setIsOpen(!isOpen)}>
                                        <img src={Menu} style={{ height: 30, width: 30 }} alt="Menu" />
                                    </Button>
        
                                    {/* Teks Translate */}
                                    <Typography fontSize={16} fontWeight={500} color="gray">
                                        Translate
                                    </Typography>
        
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                key="dropdown"
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                            >
                                                <Box display="flex" flexDirection="row" justifyContent="center" gap={2} sx={{ position: 'relative', left: 20 }}>
                                                    {/* English */}
                                                    <Box display="flex" flexDirection="column" alignItems="center">
                                                        <Button sx={{ cursor: 'pointer' }} onClick={() => setLocale("en")}>
                                                        <Box component="img" src={Eng} alt="English" width={20} height={20} />
                                                        </Button>
                                                    </Box>
        
                                                    {/* Indonesian */}
                                                    <Box display="flex" flexDirection="column" alignItems="center">
                                                      <Button sx={{ cursor: 'pointer' }} onClick={() => setLocale("id")}>
                                                        <Box component="img" src={Ind} alt="Indonesian" width={20} height={20} />
                                                      </Button>
                                                    </Box>
                                                </Box>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </Box>
                                </List>
                                </Box>
        
                                <Box sx={{ display: 'flex', mt: 5, gap: 1 }}>
                                    <Typography className="info-drawer" sx={{ fontSize: '12px' }}>< FormattedMessage id="hubungi-kami" /> :</Typography>
                                    <Typography className="info-drawer" sx={{ fontSize: '12px' }}>084374384643</Typography>
                                    <Typography className="info-drawer" sx={{ fontSize: '12px' }}>|</Typography>
                                    <Typography className="info-drawer" sx={{ fontSize: '12px' }}>lindantech@gmail.com</Typography>
                                </Box>
        
                                <Box sx={{ display: 'flex', mt: 5, gap: 2 }}>
                                    <Typography className="social-drawer" sx={{ fontSize: '14px' }}>Facebook</Typography>
                                    <Typography className="social-drawer" sx={{ fontSize: '14px' }}>Instagram</Typography>
                                    <Typography className="social-drawer" sx={{ fontSize: '14px' }}>Linkedin</Typography>
                                    <Typography className="social-drawer" sx={{ fontSize: '14px' }}>Youtube</Typography>
                                </Box>
        
                            </Box>
                        </Drawer>
                    }


      </>
    )
}