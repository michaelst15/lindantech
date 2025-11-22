import React, {useState, useEffect} from "react";
import { useTheme } from "@mui/material/styles";
import {Button} from "@mui/material";
import MenuIcon from "../image/menu-icon.png";
import { Fab } from "@mui/material";
import Eng from '../image/eng.png';
import { AnimatePresence, motion } from "framer-motion";
import Ind from '../image/ind.png';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link, useNavigate } from "react-router-dom";
import logo from "../image/logo.png";
import Menu from '../image/menu.png';
import logo1 from '../image/org.png'
import logo2 from "../image/inovatif.png"
import logo3 from '../image/transformasi.png'
import logo4 from '../image/efisien.png'
import logo5 from '../image/canggih.png'
import logo6 from '../image/futuristik.png'
import logo7 from '../image/solutif.png'
import logo8 from '../image/revolusi.png'
import logo9 from '../image/adaptif.png'
import logo10 from '../image/optimal.png'
import logo11 from '../image/visioner.png'
import logo12 from '../image/solusi-inovatif.png'
import logo13 from '../image/skalabilitas-cepat.png'
import logo14 from '../image/dukungan-ahli.png'
import logo15 from '../image/keamanan-terjamin.png'
import logo16 from '../image/integrasi-fleksibel.png'
import logo17 from '../image/efisiensi-produktifitas.png'
import background2 from '../image/background2.jpg'
import { keyframes,  AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Box, useMediaQuery, Typography, Grid } from "@mui/material";
import { FormattedMessage } from "react-intl";

export function WeAre({ setLocale }) {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false); 
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const phoneNumber = '+6285211273343';
    const message = 'Saya butuh informasi LindanTech'

    const handleClick = () => {
        const encodedMessage = encodeURIComponent(message);
        const waUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(waUrl, "_blank");
    };
   

    const menuItems = [
        { text: "Blog", path: "/" },
        { text: "Service", path: "/" },
        { text: "Contact", path: "/" },
    ];

    const menuItems2 = [
        { text: "LindanTech", path: "/" },
        { text: "Infrastruktur IT", path: "/infrastruktur" },
        { text: < FormattedMessage id="menu-1" />, path: "/" },
        { text: < FormattedMessage id="menu-2" />, path: "/we-are" },
    ];

    const slogansWithImages = [
        { text: "Inovatif", image: logo2 },
        { text: "Transformasi", image: logo3 },
        { text: "Efisien", image: logo4 },
        { text: "Canggih", image: logo5 },
        { text: "Futuristik", image: logo6 },
        { text: "Solutif", image: logo7 },
        { text: "Revolusi", image: logo8 },
        { text: "Adaptif", image: logo9 },
        { text: "Optimal", image: logo10 },
        { text: "Visioner", image: logo11 },
      ];

  return (
    <>
            <AppBar 
                position={ !isMobile ? "absolute" : "fixed" }
                sx={{ 
                    maxWidth: isMobile ? "100%" : "60%", 
                    left: "50%", // Posisikan di tengah
                    transform: "translateX(-50%)", // Supaya benar-benar di tengah
                    marginTop: isMobile ? 0 : 3, // Tambahkan margin atas saat di desktop
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
                            <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
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
                                    cursor: "pointer",
                                    "&:hover": { color: "rgba(255, 156, 75, 0.8)" },
                                }}
                                component={Link} to="/"
                                >
                                < FormattedMessage id="menu-1" />
                                </Typography>
    
                                <Typography  className="menu" component={Link} to="/we-are" sx={{ textDecoration: "none", color: "black", fontWeight: 500, "&:hover": { color: "rgba(255, 156, 75, 0.8)" } }}>
                                < FormattedMessage id="menu-2" />
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
                id="topik"
                sx={{
                    position: "relative", // Ubah absolute ke relative agar elemen berikutnya tetap mengikuti
                    top: isMobile ? 130 : 0,
                    left: 0,
                    width: "100%",
                    height: 1000,
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    zIndex: 0, // Agar tidak menutupi elemen lain, tapi tetap diatur dengan benar
                }}
            >
                    {/* Bagian Kiri - Hitam */}
                    <Box
                    sx={{
                        flex: 1,
                        backgroundColor: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                        flexDirection: "column", // Menyusun elemen secara vertikal
                        textAlign: "center", // Tengah secara horizontal
                    }}
                    >
                    {/* Typography Pertama */}
                    <Typography
                        className="headline-drawer"
                        sx={{
                        fontSize: !isMobile ? 45 : 20,
                        fontWeight: 700,
                        width: !isMobile ? 730 : 305,
                        textAlign: "left",
                        position: "relative",
                        display: "block",
                        margin: "0 auto",
                        }}
                    >
                        <Box sx={{ position: "relative", display: "inline-block" }}>
                        <FormattedMessage id="headline-9" />
                        <Box
                            component="svg"
                            xmlns="http://www.w3.org/2000/svg"
                            sx={{
                            position: "absolute",
                            left: 0,
                            bottom: -10,
                            width: isMobile ? "40%" : "17%",
                            height: 10,
                            }}
                            viewBox="0 0 100 10"
                            fill="none"
                        >
                            <path d="M0 2 C 25 8, 75 8, 100 2" stroke="blue" strokeWidth="2" fill="none" />
                        </Box>
                        </Box>
                    </Typography>

                    {/* Typography Kedua (di bawah) */}
                    {!isMobile ?
                    <Box sx={{ width: 700, margin: "0 auto", position: "relative", top: "50px" }}>
                    <Typography
                        className="headline-drawer"
                        sx={{
                            fontSize: 15,
                            fontWeight: 400,
                            textAlign: "justify",
                        }}
                    >
                        <FormattedMessage id="deskripsi-headline-9" />
                    </Typography>
                
                    {/* Button Bergabung di bagian kiri */}
                    <Button
                        onClick={() => navigate('/') }
                        sx={{
                            width: 150,
                            height: 40,
                            background: "linear-gradient(to bottom right, rgb(75, 102, 175), rgb(62, 104, 194), rgb(121, 199, 149))",
                            color: "white",
                            cursor: 'pointer',
                            fontWeight: 500,
                            textTransform: "none",
                            marginTop: "20px", // Jarak dari Typography
                            display: "block", // Agar button tidak sejajar dengan teks
                            "&:hover": { opacity: 0.8 },
                        }}
                    >
                        <FormattedMessage id="button-bergabung" />
                    </Button>
                </Box>
                
                    :
                    <Box sx={{ width: !isMobile ? 700 : 300, margin: "0 auto", position: "relative", top: 20 }}>
                    <Typography
                        className="headline-drawer"
                        sx={{
                            fontSize: 15,
                            fontWeight: 400,
                            textAlign: "justify",
                        }}
                    >
                        <FormattedMessage id="deskripsi-headline-9" />
                    </Typography>

                    {/* Tombol Bergabung di kiri bawah */}
                    <Box sx={{ display: "flex", justifyContent: "flex-start", marginTop: 2 }}>
                        <Button
                            onClick={() => navigate('/') }
                            sx={{
                                width: !isMobile ? 150 : 120,
                                height: 40,
                                background: "linear-gradient(to bottom right, rgb(75, 102, 175), rgb(62, 104, 194), rgb(121, 199, 149))",
                                color: "white",
                                cursor: 'pointer',
                                fontWeight: 500,
                                textTransform: "none",
                                "&:hover": { opacity: 0.8 },
                            }}
                        >
                           <FormattedMessage id="button-bergabung" />
                        </Button>
                    </Box>
                </Box>

                    }
                    </Box>



                    {/* Bagian Kanan - Putih */}
                    <Box
                    sx={{
                        flex: 1,
                        backgroundColor: "white",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative", // Untuk mengatur posisi elemen dalam Box
                        width: "100%",
                        height: "100vh", // Sesuaikan dengan kebutuhan
                        overflow: "hidden", // Mencegah elemen keluar dari Box
                        background: "linear-gradient(315deg, rgba(173, 216, 230, 0.8) 50%, white 50%)", // Warna diagonal
                        top: isMobile ? 100 : 0
                    }}
                    >
                    {/* Lingkaran di belakang gambar */}
                    <Box
                        sx={{
                        position: "absolute",
                        width: 500,
                        height: 500,
                        borderRadius: "50%",
                        zIndex: 1,
                        }}
                    />

                    {/* Gambar */}
                    <Box sx={{ position: "relative", zIndex: 2 }}>
                        <img src={logo1} alt="Logo" style={{ width: 450, height: "auto" }} />

                        {/* Kotak putih dengan tulisan di bawah gambar */}
                        <Box
                        sx={{
                            position: "absolute",
                            bottom: isMobile ? "10px" : "-10px",
                            left: "50%",
                            transform: "translateX(-50%) skew(-10deg)", // Miringkan ke kiri
                            backgroundColor: "white",
                            padding: "10px 20px",
                            borderRadius: "8px",
                            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                            fontWeight: "bold",
                            textAlign: "center",
                            width: "500px",
                            height: 40,
                            overflow: "hidden", // Mencegah teks keluar dari box utama
                            display: "flex",
                            alignItems: "center",
                        }}
                        >
                        {/* Efek Marquee */}
                        <Box
                            sx={{
                            display: "flex",
                            alignItems: "center",
                            minWidth: "max-content", // Agar semua elemen bisa berjalan dengan mulus
                            whiteSpace: "nowrap",
                            animation: "marquee 40s linear infinite",
                            gap: "40px",
                            fontStyle: "italic",
                            }}
                            className="point-linda"
                        >
                            {/* Duplikasi agar animasi berjalan tanpa putus */}
                            {[...slogansWithImages, ...slogansWithImages].map((item, index) => (
                            <span 
                                key={index} 
                                className="marquee-item"
                                style={{ 
                                display: "flex", 
                                alignItems: "center", 
                                padding: "0 20px", 
                                transition: "box-shadow 0.3s ease-in-out",
                                height: 100
                                }}
                            >
                                <img
                                src={item.image}
                                alt={item.text}
                                style={{ width: "20px", height: "20px", marginRight: "8px" }}
                                />
                                {item.text}
                            </span>
                            ))}
                        </Box>
                        </Box>

                        <style>
                        {`
                            @keyframes marquee {
                            from { transform: translateX(0); }
                            to { transform: translateX(-100%); } /* Geser penuh agar animasi seamless */
                            }

                            .point-linda:hover {
                            animation-play-state: paused; /* Hentikan gerakan saat hover */
                            }

                            .marquee-item:hover {
                            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3); /* Tambahkan efek shadow */
                            border-radius: 8px;
                            }
                        `}
                        </style>
                       </Box>
                    </Box>
                </Box>

                <Box
                sx={{
                    backgroundImage: `url(${background2})`, // Background image
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: !isMobile ? 900 : 1500,
                    width: "100%",
                    position: "relative",
                    display: "flex", // Gunakan flexbox
                    flexDirection: "column", // Susun elemen secara vertikal
                    justifyContent: "center", // Pusatkan vertikal
                    alignItems: "center", // Pusatkan horizontal
                    textAlign: "center", // Agar teks tetap rapi
                    top: !isMobile ? -70 : 240
                }}
            >
                {/* Baris pertama: LindanTech for + Tech Startup */}
                <Box 
                    sx={{
                        display: "flex",
                        flexDirection: !isMobile ? "row" : 'column', // Tetap dalam satu baris
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Typography className="title-background2" sx={{ color: 'white', fontSize: !isMobile ? 60 : 23 }}>
                       <FormattedMessage id="headline-10" />
                    </Typography>
                    <Typography
                    className="title-background2"
                    sx={{
                        fontSize: !isMobile ? 60 : 23,
                        marginLeft: !isMobile ? 2 : 1,
                        background: "linear-gradient(90deg,rgb(86, 231, 147),rgb(49, 61, 233))", // Gradient hijau ke biru
                        WebkitBackgroundClip: "text", // Memotong background sesuai teks
                        WebkitTextFillColor: "transparent", // Membuat teks transparan agar gradient terlihat
                        fontWeight: "bold"
                    }}
                >
                    <FormattedMessage id="headline-11" />
                </Typography>
                </Box>

                {/* Baris kedua: Business */}
                <Typography className="title-background2" sx={{ color: 'white', fontSize: !isMobile ? 60 : 30, marginTop: !isMobile ? 2 : 1 }}>
                  <FormattedMessage id="headline-12" />
                </Typography>

                <Typography className="title-background2" sx={{ color: '#7c7c7c', fontSize: !isMobile ? 20 : 15, marginTop: 2, width: !isMobile ? 500 : 330 }}>
                <FormattedMessage id="deskripsi-headline-10" />
                </Typography>

                <Box
                sx={{
                    display: !isMobile ? "grid" : 'block',
                    gridTemplateColumns: !isMobile ? "repeat(3, 1fr)" : 0, // 3 kolom
                    gap: 2, // Jarak antar kotak
                    marginTop: 4
                }}
            >
                {[
                    { title: "headline-13", desc: "deskripsi-13", logo: logo12 },
                    { title: "headline-14", desc: "deskripsi-14", logo: logo13 },
                    { title: "headline-15", desc: "deskripsi-15", logo: logo14 },
                    { title: "headline-16", desc: "deskripsi-16", logo: logo15 },
                    { title: "headline-17", desc: "deskripsi-17", logo: logo16 },
                    { title: "headline-18", desc: "deskripsi-18", logo: logo17 }
                ].map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            justifyContent: 'center',
                            width: !isMobile ? 400 : 300,
                            height: !isMobile ? 200 : 150,
                            backgroundColor: "rgba(255, 255, 255, 0.1)", // Warna awal
                            border: "1px solid rgba(255, 255, 255, 0.3)", // Border agar terlihat
                            display: "flex",
                            marginTop: isMobile ? 2 : 0,
                            flexDirection: "row", // Elemen sejajar (logo di kiri, teks di kanan)
                            alignItems: "center",
                            borderRadius: 4,
                            color: "white",
                            fontSize: 18,
                            fontWeight: "bold",
                            textAlign: "center",
                            padding: 2,
                            backdropFilter: "blur(5px)", // Efek blur untuk tampilan modern
                            transition: "background-color 0.3s ease-in-out", // Animasi transisi halus
                            "&:hover": {
                                backgroundColor: "rgba(0, 0, 0, 0.3)" // Lebih gelap saat hover
                            }
                        }}
                    >
                        {/* Logo di sebelah kiri */}
                        <img src={item.logo} alt={item.title} style={{ width: 50, height: 50, marginRight: 16 }} />

                        {/* Teks di sebelah kanan */}
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <div className="title-background2">
                            <FormattedMessage id={item.title} />
                            </div>
                            <div
                                className="title-background2"
                                style={{
                                    fontSize: 14,
                                    fontWeight: "normal",
                                    marginTop: 8,
                                    width: 200,
                                    color: "#7c7c7c"
                                }}
                            >
                                <FormattedMessage id={item.desc} />
                                {/* {item.desc} */}
                            </div>
                            <button
                                onClick={() => {
                                    const section = document.getElementById("topik");
                                    if (section) {
                                        section.scrollIntoView({ behavior: "smooth" });
                                    }
                                }}
                                className="title-background2"
                                style={{
                                    border: "none",
                                    background: "none",
                                    color: "#ffffff",
                                    fontSize: 14,
                                    fontWeight: 300,
                                    marginTop: 30,
                                    cursor: "pointer"
                                }}
                            >
                                 <FormattedMessage id="button-coba-selengkapnya"/> &nbsp; &nbsp; &gt;
                            </button>
                        </Box>
                    </Box>
                ))}
             </Box>
            </Box>

            <Box
                sx={{
                    height: 500,
                    display: "flex",
                    justifyContent: "center", // Pusatkan horizontal
                    alignItems: "center", // Pusatkan vertikal
                    textAlign: "center", // Pastikan teks tetap rapi
                    marginTop: isMobile ? 27 : 0
                }}
            >
                <Box sx={{ display: 'block', width: !isMobile ? 1200 : '100%' }}>
                <Typography
                    className="title-background2"
                    sx={{
                        fontSize: !isMobile ? 30 : 20,
                        maxWidth: !isMobile ? 600 : "90%", // Mengurangi lebar maksimal
                        margin: "0 auto", // Memastikan tetap di tengah
                        textAlign: "center",
                    }}
                >
                    <FormattedMessage id="deskripsi-9" />
                </Typography>
                <Typography
                    className="title-background2"
                    sx={{
                        fontSize: 70,
                        fontWeight: "bold",
                        background: "linear-gradient(90deg, rgb(86, 231, 147), rgb(49, 61, 233))",
                        WebkitBackgroundClip: "text", // Memotong background sesuai teks
                        WebkitTextFillColor: "transparent", // Membuat teks transparan agar gradient terlihat
                    }}
                >
                    1000+ <FormattedMessage id="pelanggan" />
                </Typography>
                </Box>
            </Box>


            <Box sx={{
                width: isMobile ? '79%' : "95%",
                height: !isMobile ? 400 : "auto",
                position: 'relative',
                top: isMobile ? 0 : 0,
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
                
                                        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2, mr: !isMobile ? "60px" : "30px" }}>
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