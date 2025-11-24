import React, { useState, useEffect, useRef } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import emailjs from '@emailjs/browser'
import Jaringan from '../image/network.png'
import Server from '../image/server.png'
import Cctv from '../image/cctv.png'
import Fingerprint from '../image/fingerprint.png'
import Proyektor from '../image/proyektor.png'
import Monitoring from '../image/monitoring.png'
import { 
    AppBar, 
    Toolbar, 
    IconButton, 
    Drawer, 
    List, 
    ListItem, 
    ListItemText, 
    Box, 
    useMediaQuery, 
    TextField, 
    Container,
    Grid,
    Card,
    CardContent,
    Typography, 
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
import Eng from '../image/eng.png';
import { AnimatePresence } from "framer-motion";
import Ind from '../image/ind.png';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion'
import Lottie from "lottie-react";
import Menu from '../image/menu.png';
import { FormattedMessage, useIntl } from  "react-intl";
import { Fab } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useTheme } from "@mui/material/styles";
import { useNavigate, useLocation } from "react-router-dom";
import MenuIcon from "../image/menu-icon.png";
import '../App.css';
import check from '../image/checked.png'
import icon1 from '../image/icon1.png'
import icon2 from '../image/icon2.png'
import icon3 from '../image/icon3.png'
import animasi2 from '../animasi/animasi2.json'
import animasi3 from '../animasi/animasi3.json'
import logo from "../image/logo.png"; // Pastikan lokasi file benar
import logo2 from '../image/GCP.png'
import logo3 from '../image/aws.png'
import logo4 from '../image/cisco.png'
import logo5 from '../image/fortinet.png'
import logo6 from '../image/ibm.png'
import logo7 from '../image/microsoft-azure.png'
import logo8 from '../image/oracle.png'
import logo9 from '../image/redhat.png'
import logo10 from '../image/vmware.png'
import logo11 from '../image/chef.png'
import logo12 from '../image/juniper.png'
import logo13 from '../image/zimbra.png'
import icon5 from '../image/icon5.png'
import icon6 from '../image/icon6.png'
import icon7 from '../image/icon7.png'
import icon8 from '../image/icon8.png'
import icon9 from '../image/icon9.png'
import icon10 from '../image/10.png'
import icon11 from '../image/11.png'
import icon12 from '../image/12.png'
import icon13 from '../image/13.png'
import icon14 from '../image/14.png'
import icon15 from '../image/15.png'
import icon16 from '../image/icon16.png'
import { Button } from "@mui/material";

const menuItems = [
    { text: "Blog", path: "/" },
    { text: "Service", path: "/" },
    { text: "Contact", path: "/" },
];

const logos = [
    { src: logo2, name: "GCP" },
    { src: logo3, name: "AWS" },
    { src: logo4, name: "Cisco" },
    { src: logo5, name: "Fortinet" },
    { src: logo6, name: "IBM" },
    { src: logo7, name: "Microsoft Azure" },
    { src: logo8, name: "Oracle" },
    { src: logo9, name: "Red Hat" },
    { src: logo10, name: "VMware" },
    { src: logo11, name: "Chef" },
    { src: logo12, name: "Juniper Network" },
    { src: logo13, name: "Zimbra" },
  ];


const menuItems2 = [
    { text: "LindanTech", path: "/" },
    { text: "Infrastruktur IT", path: "/infrastruktur" },
    { text: < FormattedMessage id="menu-1" />, id: "solution" },
    { text: < FormattedMessage id="menu-2" />, path: "/we-are" },
];



const boxVariants = {
    hidden: { backgroundColor: "#333" },
    visible: (i) => ({
        backgroundColor: "#555",
        transition: {
            duration: 0.5,
            delay: i * 0.3, // Set delay berurutan
            repeat: Infinity, // Ulangi terus menerus
            repeatType: "reverse", // Membalikkan animasi setelah selesai
        },
    }),
};

export function Home({ setLocale }) {
    const [open, setOpen] = useState(false);
    const [openBox, setOpenBox] = useState(false);
    const [openBox2, setOpenBox2] = useState(false);
    const [openBox3, setOpenBox3] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Deteksi mode mobile (<=960px)
    const [highlightIndex, setHighlightIndex] = useState(0);
    const controls = useAnimation();
    const location = useLocation(); 
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false); 
    const [offsetY, setOffsetY] = useState(0); // State untuk posisi Y
    const [success, setSuccess] = useState(false);
    const [email, setEmail] = useState("");
    const form = useRef(null);
      
        const sendEmail = (e) => {
            e.preventDefault();
            if (email.trim() === "") {
                return; // Jangan lanjutkan jika email kosong
            }
            
            emailjs.sendForm(
                "service_wkiqdcv", 
                "template_pdp3n8q", 
                form.current, 
                "TbDr3t371KGk0YAQk"
            )
            .then((result) => {
                console.log("Email sent successfully!", result.text);
                setSuccess(true);
                setTimeout(() => setSuccess(false), 3000);
            })
            .catch((error) => {
                console.error("Error sending email:", error);
            });
        }

  // Fungsi untuk menangani efek paralaks saat scroll
  const handleScroll = () => {
    setOffsetY(window.scrollY * -0.2); // Gerakkan gambar perlahan
  };

  const phoneNumber = '+6285211273343';
  const message = 'Saya butuh informasi LindanTech'

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(waUrl, "_blank");
};


  const FeatureBox = ({ title, description }) => {
    return (
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: !isMobile ? "center" : "left",
          width: !isMobile ? 400 : "100%",
          paddingY: 2,
          overflow: "hidden",
          "&:hover .line": {
            height: "800px",
          },
        }}
      >
        {/* Garis Vertikal Animasi */}
        <motion.div
          className="line"
          initial={{ height: 0 }}
          whileHover={{ height: "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            position: "absolute",
            left: -10,
            top: "50%",
            width: 2,
            height: 0,
            backgroundColor: "black",
            transform: "translateY(-50%)",
          }}
        />
  
        {/* Konten */}
        <Typography className="point-linda" sx={{ fontSize: "27px", textAlign: isMobile  ? "left" : 0 }}>
          {title}
        </Typography>
        <Typography className="deskripsi-point-linda" sx={{ fontSize: "16px", textAlign: isMobile  ? "left" : 0 }}>
          {description}
        </Typography>
      </Box>
    );
  };
  
  const features = [
    {
      title: <FormattedMessage id="headline-5" />,
      description: <FormattedMessage id="deskripsi-headline-4" />,
    },
    {
      title: <FormattedMessage id="headline-6" />,
      description: <FormattedMessage id="deskripsi-headline-5" />,
    },
    {
      title: <FormattedMessage id="headline-7" />,
      description: <FormattedMessage id="deskripsi-headline-6" />,
    },
    {
      title: <FormattedMessage id="headline-8" />,
      description: <FormattedMessage id="deskripsi-headline-7" />,
    },
  ];
  


  // Menambahkan event listener ketika komponen dimount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup listener saat unmount
  }, []);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 300); // Delay agar elemen pasti ada
      }
    }
  }, [location]);


    useEffect(() => {
        const interval = setInterval(() => {
            setHighlightIndex((prev) => (prev + 1) % logos.length);
        }, 1000); // Ubah warna setiap 1 detik

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        document.querySelectorAll(".shadow-light").forEach((el) => {
          el.classList.remove("shadow-light");
        });
      }, []);

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

        <Box sx={{
            position: "absolute",
            top: !isMobile ? 0 : 0,   
            width: "100%",
            display: "flex",
            flexDirection: "column", // Menjadikan tata letak vertikal
            alignItems: "center",
        }}>
            
            {/* Bagian Utama yang Berisi Kiri dan Kanan */}
            <Box sx={{
                display: "flex",
                flexDirection: !isMobile ? "row" : "column", // Menyesuaikan dengan tampilan desktop/mobile
                width: "100%",
                height: "950px",
                position: "relative"
            }}>
          <Box sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "950px",
            display: !isMobile ? "flex" : "block"
        }}>
            
            {/* Bagian Kiri (Putih) */}
            <Box
                sx={{
                    width: !isMobile ? "60%" : "auto",
                    height: !isMobile ? "93.3%" : '80%',
                    backgroundColor: !isMobile ? "white" : 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    padding: 4,
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                }}
                >
                 <Box
                    sx={{
                    position: "absolute",
                    top: !isMobile ? 60 : 170,
                    left: isMobile ? 300 : 90,
                    width: !isMobile ? 90 : 50, // Sesuaikan ukuran gambar
                    height: 90,
                    animation: "floating 3s ease-in-out infinite", // Animasi mengapung
                        "@keyframes floating": {
                        "0%": { transform: "translateY(0px)" },
                        "50%": { transform: "translateY(-10px)" }, // Naik 10px
                        "100%": { transform: "translateY(0px)" },
                        },
                    }}
                >
                    <img
                    src={icon2} // Ganti dengan path gambar yang sesuai
                    alt="LindanTech Logo"
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                    />
                </Box>

                
                <Box id="topik" sx={{ position: "relative", textAlign: "left", width: !isMobile ? 730 : 320, margin: "0 auto" }}>
                    <Typography
                        className="headline-drawer"
                        sx={{
                            fontSize: !isMobile ? 45 : 20,
                            fontWeight: 700,
                            textAlign: "left", // Tetap rata kiri
                            display: "block",
                            paddingLeft: 1
                        }}
                    >
                        <FormattedMessage id="headline-1" />
                    </Typography>

                    {/* SVG Garis Paling Bawah dan Kiri */}
                    <Box
                        component="svg"
                        xmlns="http://www.w3.org/2000/svg"
                        sx={{
                            position: "absolute",
                            left: 0, // Paling kiri
                            bottom: -10, // Letakkan sedikit di bawah teks
                            width: isMobile ? "40%" : "19%", // Sesuaikan panjang garis
                            height: 10, // Ketebalan garis
                        }}
                        viewBox="0 0 100 10"
                        fill="none"
                    >
                        <path d="M0 2 C 25 8, 75 8, 100 2" stroke="blue" strokeWidth="2" fill="none" />
                    </Box>
                </Box>



        <Typography
            className="headline-drawer"
            sx={{
                fontSize: 15,
                fontWeight: 400,
                width: !isMobile ? 700 : 300,
                position: "relative",
                textAlign: "justify", // Rata kanan dan kiri
                margin: "0 auto", // Membuat elemen berada di tengah horizontal
                top: isMobile ? "20px" : "50px",
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
            }}
            >
             <FormattedMessage id="deskripsi-1" />
            </Typography>


                {/* Box untuk email dan button */}
                <Box
                    sx={{
                    width: !isMobile ? 450 : 350,
                    height: 60,
                    backgroundColor: "#f5f5f5",
                    marginTop: !isMobile ? 15 : 5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingLeft: !isMobile ? 20 : 0,
                    paddingRight: !isMobile ? 10 : 0,
                    marginLeft: isMobile ? 0 : 0,
                    borderRadius: 3,
                    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
                    position: "relative",
                    overflow: "hidden",
                    }}
                >
                    {/* Garis warna di kiri */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2, // Jarak antara elemen
                            width: "100%",
                        }}
                    >
                        {/* Garis Samping */}
                        <Box
                            sx={{
                                position: "absolute",
                                left: 0,
                                top: 0,
                                width: 10,
                                height: "100%",
                                background: "linear-gradient(to bottom right, rgb(75, 102, 175), rgb(62, 104, 194), rgb(121, 199, 149))",
                                borderTopLeftRadius: 8,
                                borderBottomLeftRadius: 8,
                            }}
                        />

                        {/* Input Email */}
                        <form ref={form} onSubmit={sendEmail}>
                            <TextField
                                placeholder="example@gmail.com"
                                variant="standard"
                                size="small"
                                type="email"
                                name="name"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                sx={{
                                    width: !isMobile ? 250 : "50%",
                                    fontSize: !isMobile ? 16 : 13,
                                    "& .MuiInput-underline:before": { borderBottom: "none" },
                                    "& .MuiInput-underline:after": { borderBottom: "none" },
                                    "& .MuiInputBase-input": {
                                        padding: "5px 10px",
                                        backgroundColor: "transparent",
                                    },
                                    "&:hover .MuiInput-underline:before": {
                                        borderBottom: "2px solid",
                                        borderImage: "linear-gradient(to right, rgb(86, 231, 147), rgb(49, 61, 233)) 1",
                                        transition: "border-bottom 0.3s ease-in-out",
                                    },
                                    "& .MuiInput-underline:focus-within:after": {
                                        borderBottom: "2px solid",
                                        borderImage: "linear-gradient(to right, rgb(86, 231, 147), rgb(49, 61, 233)) 1",
                                    },
                                    position: "relative",
                                    left: !isMobile ? -30 : 30,
                                }}
                            />

                            <Button
                                type="submit"
                                sx={{
                                    width: !isMobile ? 150 : 120,
                                    height: 40,
                                    background:
                                        "linear-gradient(to bottom right, rgb(75, 102, 175), rgb(62, 104, 194), rgb(121, 199, 149))",
                                    color: "white",
                                    fontWeight: 500,
                                    position: "relative",
                                    left: 50,
                                    textTransform: "none",
                                    "&:hover": { opacity: 0.8 },
                                }}
                            >
                                < FormattedMessage id="button-bergabung" />
                            </Button>
                        </form>
                    </Box>
                    </Box>

                   
                    {success && (
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{
                            position: "fixed",
                            top: isMobile ? "50%" : "78%",
                            left: "15%",
                            zIndex: 999999,
                            transform: "translate(-50%, -50%)",
                            backgroundColor: "rgba(128, 128, 128, 0.8)",
                            color: "white",
                            padding: "10px 20px",
                            borderRadius: "5px",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                        }}
                    >
                        <img src={check} alt="Success" style={{ width: "20px", height: "20px" }} />
                        <span>Berhasil mengirim request</span>
                    </motion.div>
                )}
                 
                    <Box sx={{ mt: !isMobile ? 10 : 5, display: "flex", gap: !isMobile ? 10 : 2, width: isMobile ? '100%' : 680 }}>
                    {["check-1", "check-2", "check-3"].map((id, index) => (
                        <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            {/* Icon centang */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="gray"
                                width={ !isMobile ? "20px" : '18px'}
                                height="20px"
                            >
                                <path d="M9 16.17l-4.88-4.88L2 13l7 7 14-14-2.12-2.12z" />
                            </svg>

                            {/* Text */}
                            <Typography
                                className="headline-drawer"
                                sx={{
                                    fontSize: !isMobile ? 18 : 13,
                                    fontWeight: 400,
                                    textAlign: "left",
                                }}
                            >
                                <FormattedMessage id={id} />
                            </Typography>
                        </Box>
                    ))}
                </Box>


                {/* Image Box on the right */}
                <Box
                    sx={{
                        position: "absolute",
                        right: isMobile ? 380 : 40,
                        bottom: !isMobile ? 80 : 320, // Geser gambar lebih ke atas
                        width: 100, // Lebar gambar
                        height: 100, // Tinggi gambar
                        animation: "floating 3s ease-in-out infinite", // Animasi mengapung
                        "@keyframes floating": {
                        "0%": { transform: "translateY(0px)" },
                        "50%": { transform: "translateY(-10px)" }, // Naik 10px
                        "100%": { transform: "translateY(0px)" },
                        },
                    }}
                    >
                    <img
                        src={icon1}
                        alt="LindanTech"
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                    />
                    </Box>
                </Box>



            {/* Bagian Kanan (Gradien) */}
            <Box
            sx={{
                width: !isMobile ? "40%" : "100%",
                height: !isMobile ? "100%" : '60%',
                background: "linear-gradient(to bottom right, rgb(75, 102, 175), rgb(62, 104, 194), rgb(121, 199, 149))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: isMobile ? -10 : 0,
                position: "relative",
                overflow: "hidden",
            }}
            >
            {/* Gambar animasi */}
            <Box
                sx={{
                position: "relative",
                bottom: !isMobile ? 0 : 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                animation: "appearRotate 1s ease-in-out forwards",
                }}
            >
                <img
                src={icon3}
                alt="Centered Image"
                style={{
                    width: !isMobile ? "60%" : "80%",
                    height: "auto",
                    objectFit: "contain",
                }}
                />
            </Box>

            {/* Box dengan efek kaca + teks */}
            <Box
            sx={{
                position: "absolute",
                top: isMobile ? 95 : 230,
                left: isMobile ? 10 : 60,
                width: !isMobile ? 220 : 160,
                height: !isMobile ? 50 : 30,
                background: "rgba(255, 255, 255, 0.2)", // Menggunakan warna putih transparan
                backdropFilter: "blur(10px)", // Memberikan efek blur
                WebkitBackdropFilter: "blur(10px)", // Untuk browser berbasis WebKit
                borderRadius: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: 600,
                fontSize: 16,
                padding: "10px 15px",
                opacity: 0,
                animation: "fadeIn 1s ease-in-out 2s forwards",
                border: "1px solid rgba(255, 255, 255, 0.3)", // Membuatnya lebih menonjol dengan border yang lebih tipis
            }}
            >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography
                sx={{
                    fontSize: isMobile ? 12 : 16,
                    fontWeight: 600,
                    color: "white",
                }}
                >
                <FormattedMessage id="hai" /> !
                </Typography>

                {/* Emoji Tangan Melambai */}
                <span
                style={{
                    fontSize: isMobile ? 16 : 18, // Sesuaikan ukuran emoji
                    position: 'relative',
                    bottom: 3
                }}
                >
                👋
                </span>

                <Typography
                sx={{
                    fontSize: isMobile ? 12 : 16,
                    fontWeight: 600,
                    color: "white",
                }}
                >
                <FormattedMessage id="kunjungi-kami" />
                </Typography>
            </Box>
            </Box>

            <Box
            sx={{
                position: "absolute",
                top: isMobile ? 400 : 700,
                left: isMobile ? 190 : 390,
                width: !isMobile ? 140 : 120,
                height: !isMobile ? 40 : 40,
                background: "rgba(255, 255, 255, 0.2)", // Menggunakan warna putih transparan
                backdropFilter: "blur(10px)", // Memberikan efek blur
                WebkitBackdropFilter: "blur(10px)", // Untuk browser berbasis WebKit
                borderRadius: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "right",
                color: "white",
                fontWeight: 600,
                fontSize: 16,
                padding: "10px 15px",
                opacity: 0,
                animation: "fadeIn2 1s ease-in-out 2s forwards",
                border: "1px solid rgba(255, 255, 255, 0.3)", // Membuatnya lebih menonjol dengan border yang lebih tipis
            }}
            >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography
                sx={{
                    fontSize: isMobile ? 14 : 16,
                    fontWeight: 600,
                    color: "white",
                }}
                >
                <FormattedMessage id="terpercaya" />
                </Typography>

                {/* Emoji Tangan Melambai */}
                <span
                style={{
                    fontSize: isMobile ? 16 : 18, // Sesuaikan ukuran emoji
                    position: 'relative',
                    bottom: 3
                }}
                >
                👍
                </span>
            </Box>
            </Box>

            <style>
                {`
                @keyframes fadeIn {
                    0% { opacity: 0; transform: translateY(-20px); }
                    100% { opacity: 1; }
                    }
                    @keyframes fadeIn2 {
                    0% { opacity: 0; transform: translateY(20px); } /* Dari bawah */
                    100% { opacity: 1; transform: translateY(0); } /* Ke posisi normal */
                    }

                    @keyframes appearRotate {
                    0% {
                        transform: translateY(100px) rotate(-90deg) scale(0.5);
                        opacity: 0;
                    }
                    100% {
                        transform: translateY(0) rotate(0deg) scale(${ !isMobile ? 2.0 : 1.2});
                        opacity: 1;
                    }
                    }
                `}
            </style>
         </Box>
       </Box>
      </Box>

<Container
  sx={{
    py: 6,
    mt: { xs: 50, md: 0 },   // mobile turun, desktop normal
  }}
>
      <Grid 
        container 
        rowSpacing={6}
        columnSpacing={4}
      >

        {/* ===================== CARD 1 ===================== */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2 }}>
            <CardContent>
              
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <img src={Jaringan} alt="Jaringan" style={{ width: 40, marginRight: 10 }} />
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Instalasi LAN & Wifi Akses Point
                </Typography>
              </Box>

              <Typography sx={{ mb: 2 }}>
                Instalasi Jaringan PC dan Wifi Akses Point untuk perusahaan,
                perumahan dan lainnya.
              </Typography>

              {[
                "Konsultasi Penggunaan Media yang Cocok",
                "Pengukuran Area yang akan di Instalasi",
                "Instalasi & Konfigurasi Kabel LAN",
                "Instalasi & Konfigurasi Wifi Akses Point",
              ].map((item, idx) => (
                <Box key={idx} sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <CheckCircleOutlineIcon sx={{ color: "#42A5F5", mr: 1 }} />
                  <Typography>{item}</Typography>
                </Box>
              ))}

            </CardContent>
          </Card>
        </Grid>

        {/* ===================== CARD 2 ===================== */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2 }}>
            <CardContent>

              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <img src={Server} alt="Server" style={{ width: 40, marginRight: 10 }} />
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Instalasi & Konfigurasi Server
                </Typography>
              </Box>

              <Typography sx={{ mb: 2 }}>
                Instalasi dan konfigurasi Sistem Operasi PC maupun Server.
              </Typography>

              {[
                "Instalasi Sistem Operasi Windows/Linux",
                "Instalasi & Konfigurasi Windows/Linux Server",
                "Instalasi & Konfigurasi Sharing Printer",
                "Troubleshooting PC & Server",
              ].map((item, idx) => (
                <Box key={idx} sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <CheckCircleOutlineIcon sx={{ color: "#42A5F5", mr: 1 }} />
                  <Typography>{item}</Typography>
                </Box>
              ))}

            </CardContent>
          </Card>
        </Grid>

        {/* ===================== CARD 3 ===================== */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2 }}>
            <CardContent>

              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <img src={Cctv} alt="CCTV" style={{ width: 40, marginRight: 10 }} />
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Instalasi CCTV & IP Cam
                </Typography>
              </Box>

              <Typography sx={{ mb: 2 }}>
                Instalasi dan konfigurasi CCTV Analog maupun IP Cam, DVR dan Media
                Penyimpanannya.
              </Typography>

              {[
                "Konsultasi Penggunaan Media yang Cocok",
                "Pengukuran Area yang akan di Instalasi",
                "Instalasi & Konfigurasi Kabel LAN/Coaxial",
                "Instalasi & Konfigurasi CCTV, IP Cam & DVR/NVR",
              ].map((item, idx) => (
                <Box key={idx} sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <CheckCircleOutlineIcon sx={{ color: "#42A5F5", mr: 1 }} />
                  <Typography>{item}</Typography>
                </Box>
              ))}

            </CardContent>
          </Card>
        </Grid>

        {/* ===================== CARD 4 ===================== */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2 }}>
            <CardContent>
              
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <img src={Fingerprint} alt="Fingerprint" style={{ width: 40, marginRight: 10 }} />
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Instalasi Akses & Fingerprint
                </Typography>
              </Box>

              <Typography sx={{ mb: 2 }}>
                Instalasi dan Konfigurasi Mesin Absensi, Pintu Akses untuk menjaga
                keamanan kantor.
              </Typography>

              {[
                "Analisa Kebutuhan yang Cocok",
                "Instalasi & Konfigurasi Mesin Absensi",
                "Instalasi & Konfigurasi Akses Door",
                "Training dan Pendaftaran Akses Karyawan",
              ].map((item, idx) => (
                <Box key={idx} sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <CheckCircleOutlineIcon sx={{ color: "#42A5F5", mr: 1 }} />
                  <Typography>{item}</Typography>
                </Box>
              ))}

            </CardContent>
          </Card>
        </Grid>

        {/* ===================== CARD 5 ===================== */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2 }}>
            <CardContent>

              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <img src={Proyektor} alt="Proyektor" style={{ width: 40, marginRight: 10 }} />
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Instalasi Proyektor dan Layar
                </Typography>
              </Box>

              <Typography sx={{ mb: 2 }}>
                Instalasi dan konfigurasi Proyektor gantung dan Layar manual maupun otomatis.
              </Typography>

              {[
                "Konsultasi Penggunaan Media yang Cocok",
                "Pengukuran Area yang akan di Instalasi",
                "Instalasi & Konfigurasi Proyektor & Braket",
                "Instalasi & Layar Proyektor",
              ].map((item, idx) => (
                <Box key={idx} sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <CheckCircleOutlineIcon sx={{ color: "#42A5F5", mr: 1 }} />
                  <Typography>{item}</Typography>
                </Box>
              ))}

            </CardContent>
          </Card>
        </Grid>

        {/* ===================== CARD 6 ===================== */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2 }}>
            <CardContent>

              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <img src={Monitoring} alt="Monitoring" style={{ width: 40, marginRight: 10 }} />
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  L1 Support Jakarta: Jaga Sistem Anda Tetap Stabil
                </Typography>
              </Box>

              <Typography sx={{ mb: 2 }}>
                Monitoring 24/7 terhadap server & jaringan.
              </Typography>

              {[
                "Dukungan Teknis Dasar untuk sistem Linux.",
                "Penanganan Tiket Pertama (Ticket Logging & Initial Triage).",
                "Diagnosis Awal dan eskalasi yang tepat sasaran.",
                "Eksekusi Perintah & Maintenance rutin berdasarkan SOP.",
                "Bantuan Helpdesk untuk masalah end-user.",
                "Pelaporan Kinerja sistem secara berkala.",
              ].map((item, idx) => (
                <Box key={idx} sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <CheckCircleOutlineIcon sx={{ color: "#42A5F5", mr: 1 }} />
                  <Typography>{item}</Typography>
                </Box>
              ))}

            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Container>


           
         

     {!isMobile ? 
      <Box
        sx={{
            display: !isMobile ? "flex" : 'block',
            flexDirection: !isMobile ? "row" : 'column',
            width: "100%",
            height: "1000px",
            position: "relative",
            justifyContent: "space-between",
            alignItems: "center",
        }}
        >
        {/* Bagian Kiri */}
        <Box
            sx={{
            width: "40%",
            height: "100%",
            background: "linear-gradient(to bottom right, rgb(121, 199, 149), rgb(62, 104, 194), rgb(75, 102, 175))",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 4,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
        >
            <Lottie style={{ position: 'relative', top: -100 }} animationData={animasi2}/>
        </Box>
 
        {/* Bagian Kanan */}
        <Box
            sx={{
                width: "60%",
                height: "100%",
                backgroundColor: "#1f2123",
                display: "flex",
                flexDirection: "column",
                alignItems: "center", // Posisi ke tengah horizontal
                justifyContent: "center", // Posisi ke tengah vertikal
                padding: 4,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                textAlign: "center", // Pastikan teks juga rata tengah
            }}
        >
             <Typography 
                className="headline-blok-second" 
                sx={{ 
                    fontSize: 50, 
                    width: "100%", 
                    maxWidth: 800, 
                    lineHeight: 1.2, 
                    textAlign: "left", 
                    position: 'relative',
                    top: -50,
                    ml: -9 // Pastikan tidak ada margin kiri
                }}
            >
                <FormattedMessage id="headline-2" />
            </Typography>
            <Box
            component="svg"
            xmlns="http://www.w3.org/2000/svg"
            sx={{
                position: "relative",
                left: -350,
                top: -50, // Sesuaikan agar tepat di bawah teks
                width: "100%",
                height: 10, // Sesuaikan ketebalan garis
            }}
            viewBox="0 0 100 10"
            fill="none"
            >
            <path d="M0 2 C 25 8, 75 8, 100 2" stroke="blue" strokeWidth="2" fill="none" />
            </Box>

            <Grid 
            container 
            spacing={3} 
            sx={{ marginTop: -4, width: "60%", justifyContent: "center" }} 
        >
            {logos.map((logo, index) => (
                <Grid
                    item
                    xs={3} // 2 box per baris
                    key={index}
                    sx={{ display: "flex", justifyContent: "center" }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 100,
                            height: 100,
                            transition: "background-color 0.5s ease-in-out", // Animasi smooth
                            backgroundColor: index === highlightIndex ? "#555" : "#333", // Ganti warna otomatis
                        }}
                    >
                        <Box
                            component="img"
                            src={logo.src}
                            alt={logo.name}
                            sx={{ width: 50, height: "auto", marginBottom: 1 }}
                        />
                        <Typography
                            sx={{ fontSize: 14, color: "#fff", fontWeight: "bold", textAlign: "center" }}
                        >
                            {logo.name}
                        </Typography>
                    </Box>
                </Grid>
            ))}
        </Grid>

        </Box>


        </Box>
         :
         <Box
            sx={{
                display: "flex",
                flexDirection:"column",
                width: "82%",
                height: "1050px",
                position: "relative",
                justifyContent: "center", // 🔥 Ini yang penting
                alignItems: "center",
                top: 680
            }}
            >
            {/* Bagian Kiri */}
            <Box
                sx={{
                width: "100%",
                backgroundColor: "#1f2123",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: 4,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                }}
            >
                 <Typography 
                className="headline-blok-second" 
                sx={{ 
                    fontSize: 30, 
                    width: "100%", 
                    maxWidth: 500, 
                    lineHeight: 1.2, 
                    textAlign: "left", 
                    ml: 2 // Pastikan tidak ada margin kiri
                }}
            >
                < FormattedMessage id="headline-2" />
            </Typography>
            <Box
            component="svg"
            xmlns="http://www.w3.org/2000/svg"
            sx={{
                position: "relative",
                left: -88,
                top: -2, // Sesuaikan agar tepat di bawah teks
                width: "100%",
                height: 10, // Sesuaikan ketebalan garis
            }}
            viewBox="0 0 100 10"
            fill="none"
            >
            <path d="M0 2 C 25 8, 75 8, 100 2" stroke="blue" strokeWidth="2" fill="none" />
            </Box>

            <Grid 
                container 
                spacing={2} 
                sx={{ marginTop: 4, width: "100%", justifyContent: "center" }} // Pusatkan grid
            >
                {logos.map((logo, index) => (
                    <Grid
                        item
                        xs={6} // Jika barisnya genap (0, 2, 4, ...) → 2 kolom (xs=6), selain itu → 3 kolom (xs=4)
                        key={index}
                        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                    >
                     <motion.div
                        initial={{ backgroundColor: "#333" }}
                        animate={{ backgroundColor: index === highlightIndex ? "#555" : "#333" }}
                        transition={{ duration: 0.5 }}
                    >
                         <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                width: 100,
                                height: 100,
                                boxShadow: 3,
                                padding: 2,
                            }}
                        >
                            <Box
                                component="img"
                                src={logo.src}
                                alt={logo.name}
                                sx={{ width: 50, height: "auto", marginBottom: 1 }}
                            />
                            <Typography
                                sx={{ fontSize: 14, color: "#fff", fontWeight: "bold", textAlign: "center" }}
                            >
                                {logo.name}
                            </Typography>
                            </Box>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>


            </Box>

            {/* Bagian Kanan */}
            <Box
                sx={{
                width: "100%",
                height: "100%",
                background: "linear-gradient(to bottom right, rgb(121, 199, 149), rgb(62, 104, 194), rgb(75, 102, 175))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 4,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                }}
            >
                <Lottie animationData={animasi2}/>
            </Box>
            <Box
            sx={{
                width: "100%",
                height: "100px",
                flexGrow: 1,
                flexShrink: 0,
                backgroundColor: "#1f2123",
                display: "flex",
                flexDirection: "column",
                alignItems: "center", // Posisi ke tengah horizontal
                justifyContent: "center", // Posisi ke tengah vertikal
                padding: 4,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                textAlign: "center", // Pastikan teks juga rata tengah
            }}
        ></Box>
        </Box>
        }

{!isMobile ? 
 <Box
 sx={{
   width: "100%",
   height: "300px", // Sesuaikan tinggi sesuai kebutuhan
   display: "flex",
   justifyContent: "space-between", // Membuat icon9 dan icon11 berada di sisi kiri & kanan
   alignItems: "flex-end", // Mengatur icon9 agar ada di bagian bawah
   position: "relative", // Agar icon10 bisa diposisikan lebih atas dari icon9
   right: !isMobile ? 60 : 0
 }}
>
 {/* Icon9 di kiri bawah */}
 <motion.div
      style={{
        position: "absolute", // Atau gunakan fixed jika perlu
        top: 300, // Posisi awal
        left: -300,
        zIndex: -2,
      }}
      animate={{ y: offsetY }} // Gerakan vertikal sesuai nilai offsetY
      transition={{ type: "tween", ease: "easeOut", duration: 0.3 }} // Pergerakan lebih smooth
    >
      <img src={icon9} alt="icon9" style={{ width: 1100, height: "auto" }} />
    </motion.div>
</Box>
 : 0
}


<Box
  id="solution"
  sx={{
    backgroundColor: "white",
    height: isMobile ? "auto" : "700px", // Ubah agar menyesuaikan konten
    width: !isMobile ? "70%" : '70%',
    position: "relative",
    top: !isMobile ? -400 : 990,
    borderRadius: 10,
    padding: 4,
    display: "flex",
    flexDirection: isMobile ? "column" : "row", // Kolom untuk mobile, baris untuk desktop
    alignItems: "center",
    gap: 3,
  }}
>
  <Grid container spacing={2} position={!isMobile ? 'relative' : 0} top={!isMobile ? -20 : 0}>
    {/* Custom Software Development */}
    <Grid item xs={12} md={4}>
    <Box textAlign="center">
        <img src={icon5} style={{ height: !isMobile ? 300 : 200, width: !isMobile ? 400 : 300 }} />
        <Typography
        className="headline-blok-three"
        sx={{ fontSize: 20, fontWeight: "bold", marginBottom: 1 }}
        >
         <FormattedMessage id="headline-solusi-1" />
        </Typography>
        <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: 1,
            position: 'relative',
            top: 20
        }}
        >
        {[
            "point-solusi-1",
            "point-solusi-2",
            "point-solusi-3",
            "point-solusi-4",
        ].map((text, index) => (
            <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
                component="svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                sx={{
                width: !isMobile ? 20 : 18,
                height: 20,
                fill: "gray",
                }}
            >
                <path d="M9 16.17l-4.88-4.88L2 13l7 7 14-14-2.12-2.12z" />
            </Box>
            <Typography className="headline-blok-three-in" sx={{ fontSize: 16 }}>
              <FormattedMessage id={text} />
            </Typography>
            </Box>
        ))}
        </Box>
        <Button
        onClick={() => setOpenBox(true)}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 1,
          position: "relative",
          top: 80,
        }}
      >
        <img src={icon8} style={{ height: 30, width: 30 }} alt="icon" />
        <Typography className="headline-blok-three-in" sx={{ textTransform: "none" }}>
          <FormattedMessage id="button-selengkapnya" />
        </Typography>
      </Button>

      {/* Box putih muncul */}
      {openBox && (
        <Box
          sx={{
            position: 'fixed',
            top: !isMobile ? 500 : 400,
            bottom: 0,
            left: '50%',
            transform: 'translate(-50%, 100%)',
            backgroundColor: 'white',
            width: '80%',
            maxWidth: 400,
            height: !isMobile ? 640 : 600,
            padding: 4,
            borderRadius: 2,
            boxShadow: 5,
            zIndex: 9999,
            animation: 'coinSpinSlideUp 1s ease forwards',
            overflow: 'hidden',
          }}
        >
          {/* Tombol Close di pojok kiri atas */}
          <IconButton
            onClick={() => setOpenBox(false)}
            sx={{
              position: 'absolute',
              top: 8,
              left: 8,
              color: 'gray',
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Isi di dalam Box */}
          <Typography className="headline-blok-three" variant="h6" fontSize={isMobile ? 15 : 18} sx={{ fontWeight: 'bold', marginBottom: 2, mt: 4 }}>
          Pengembangan Perangkat Lunak – Solusi Digital Terintegrasi untuk Kebutuhan Bisnis Anda
          </Typography>
          <Typography className="headline-blok-three-in" fontSize={isMobile ? 13 : 16}>
          Di era transformasi digital, kecepatan, ketepatan, dan integrasi sistem menjadi kunci 
          keunggulan kompetitif. Kami menghadirkan layanan Pengembangan Perangkat Lunak sebagai 
          bagian dari solusi IT menyeluruh untuk membantu perusahaan Anda beradaptasi, berinovasi, 
          dan berkembang secara berkelanjutan.
          </Typography>
          <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 3,
                marginTop: 2,
            }}
            >
            {[
                'Web & Mobile',
                'ERP & CRM',
                'Bisnis & Sistem',
                'API & Middleware'
            ].map((title, index) => (
                <Box
                key={index}
                sx={{
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    backgroundColor: '#add8e6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    padding: 2,
                    fontSize: 12,
                }}
                >
                {title}
                </Box>
            ))}
            </Box>
        </Box>
      )}

      {/* Animasi Keyframes */}
      <style>
{`
  @keyframes coinSpinSlideUp {
    0% {
      transform: translate(-50%, 100%) rotateY(0deg);
      opacity: 0;
    }
    50% {
      transform: translate(-50%, 0%) rotateY(180deg);
      opacity: 0.7;
    }
    100% {
      transform: translate(-50%, -50%) rotateY(360deg);
      opacity: 1;
    }
  }
`}
</style>
    </Box>
    </Grid>


        {/* IT Infrastructure Solutions */}
        <Grid item xs={12} md={4} sx={{ mt: !isMobile ? 0 : 20 }}>
        <Box textAlign="center">
        <img src={icon6} style={{ height: !isMobile ? 300 : 200, width: !isMobile ? 400 : 300 }} />
            <Typography className="headline-blok-three" sx={{ fontSize: 20, fontWeight: "bold" }}>
             <FormattedMessage id="headline-solusi-2" />
            </Typography>
            <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: 1,
            position: 'relative',
            top: 20
        }}
        >
        {[
            "point-solusi-5",
            "point-solusi-6",
            "point-solusi-7",
            "point-solusi-8",
        ].map((text, index) => (
            <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
                component="svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                sx={{
                width: !isMobile ? 20 : 18,
                height: 20,
                fill: "gray",
                }}
            >
                <path d="M9 16.17l-4.88-4.88L2 13l7 7 14-14-2.12-2.12z" />
            </Box>
            <Typography className="headline-blok-three-in" sx={{ fontSize: 16 }}>
              <FormattedMessage id={text} />
            </Typography>
            </Box>
        ))}
        </Box>
        <Button
        onClick={() => {
           setOpenBox2(true)
        }}
        sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center", // Pastikan sejajar vertikal
            gap: 1,
            position: "relative",
            top: 80,
        }}
        >
        <img src={icon8} style={{ height: 30, width: 30 }} alt="icon" />
        <Typography className="headline-blok-three-in" sx={{ textTransform: "none" }}>
        <FormattedMessage id="button-selengkapnya" />
        </Typography>
        </Button>

        {openBox2 && (
        <Box
          sx={{
            position: 'fixed',
            top: !isMobile ? 500 : 400,
            bottom: 0,
            left: '50%',
            transform: 'translate(-50%, 100%)',
            backgroundColor: 'white',
            width: '80%',
            maxWidth: 400,
            height: !isMobile ? 640 : 600,
            padding: 4,
            borderRadius: 2,
            boxShadow: 5,
            zIndex: 9999,
            animation: 'coinSpinSlideUp 1s ease forwards',
            overflow: 'hidden',
          }}
        >
          {/* Tombol Close di pojok kiri atas */}
          <IconButton
            onClick={() => setOpenBox2(false)}
            sx={{
              position: 'absolute',
              top: 8,
              left: 8,
              color: 'gray',
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Isi di dalam Box */}
          <Typography className="headline-blok-three" variant="h6" fontSize={isMobile ? 15 : 18} sx={{ fontWeight: 'bold', marginBottom: 2, mt: 4 }}>
          Solusi Infrastruktur TI – Membawa Perusahaan Anda ke Era Digital dengan Infrastruktur Tangguh dan Terkelola
          </Typography>
          <Typography className="headline-blok-three-in" fontSize={isMobile ? 13 : 16}>
          Di dunia yang semakin terhubung dan berbasis teknologi, memiliki infrastruktur TI yang andal, aman, 
          dan scalable sangat penting bagi kelangsungan bisnis. Kami menyediakan Solusi Infrastruktur TI yang 
          menyeluruh dan dirancang untuk mendukung pertumbuhan serta efisiensi operasional perusahaan Anda.
          </Typography>
          <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 3,
                marginTop: 2,
            }}
            >
            {[
                'Cloud Computing & Deployment (AWS, GCP, Azure)',
                'Manajemen & Keamanan Jaringan',
                'Data Center & Server Management',
                'IT Support & Maintenance'
            ].map((title, index) => (
                <Box
                key={index}
                sx={{
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    backgroundColor: '#add8e6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    padding: 2,
                    fontSize: 12,
                }}
                >
                {title}
                </Box>
            ))}
            </Box>
        </Box>
      )}


        </Box>
        </Grid>

        {/* Digital Transformation & IT Consulting */}
        <Grid item xs={12} md={4} sx={{ mt: !isMobile ? 0 : 20 }}>
        <Box textAlign="center">
        <img src={icon7} style={{ height: !isMobile ? 300 : 200, width: !isMobile ? 400 : 300 }} />
            <Typography className="headline-blok-three" sx={{ fontSize: 20, fontWeight: "bold" }}>
             <FormattedMessage id="headline-solusi-3" />
            </Typography>
        <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: 1,
            position: 'relative',
            top: 20
        }}
        >
        {[
            "point-solusi-9",
            "point-solusi-10",
            "point-solusi-11",
            "point-solusi-12",
        ].map((text, index) => (
            <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
                component="svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                sx={{
                width: !isMobile ? 20 : 18,
                height: 20,
                fill: "gray",
                }}
            >
                <path d="M9 16.17l-4.88-4.88L2 13l7 7 14-14-2.12-2.12z" />
            </Box>
            <Typography className="headline-blok-three-in" sx={{ fontSize: 16 }}>
               <FormattedMessage id={text} />
            </Typography>
            </Box>
        ))}
        </Box>
        <Button
        onClick={() => {
           setOpenBox3(true)
        }}
        sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center", // Pastikan sejajar vertikal
            gap: 1,
            position: "relative",
            top: 80,
        }}
        >
        <img src={icon8} style={{ height: 30, width: 30 }} alt="icon" />
        <Typography className="headline-blok-three-in" sx={{ textTransform: "none" }}>
          <FormattedMessage id="button-selengkapnya" />
        </Typography>
        </Button>

        {openBox3 && (
        <Box
          sx={{
            position: 'fixed',
            top: !isMobile ? 500 : 400,
            bottom: 0,
            left: '50%',
            transform: 'translate(-50%, 100%)',
            backgroundColor: 'white',
            width: '80%',
            maxWidth: 400,
            height: !isMobile ? 640 : 600,
            padding: 4,
            borderRadius: 2,
            boxShadow: 5,
            zIndex: 9999,
            animation: 'coinSpinSlideUp 1s ease forwards',
            overflow: 'hidden',
          }}
        >
          {/* Tombol Close di pojok kiri atas */}
          <IconButton
            onClick={() => setOpenBox3(false)}
            sx={{
              position: 'absolute',
              top: 8,
              left: 8,
              color: 'gray',
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Isi di dalam Box */}
          <Typography className="headline-blok-three" variant="h6" fontSize={isMobile ? 15 : 18} sx={{ fontWeight: 'bold', marginBottom: 2, mt: 4 }}>
          Transformasi Digital & Konsultasi TI – Merancang Masa Depan Digital Bisnis Anda
          </Typography>
          <Typography className="headline-blok-three-in" fontSize={isMobile ? 13 : 16}>
          Di era ekonomi digital, kecepatan beradaptasi terhadap perubahan teknologi menentukan 
          keberlanjutan dan daya saing bisnis. Kami hadir sebagai mitra transformasi digital dan 
          konsultasi teknologi informasi (TI) untuk membantu organisasi Anda menghadapi tantangan 
          masa kini dan meraih peluang masa depan dengan strategi dan implementasi yang tepat.
          </Typography>
          <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 3,
                marginTop: 2,
            }}
            >
            {[
                'Strategi Transformasi Digital',
                'Migrasi ke Cloud & Modernisasi Sistem',
                'Optimasi TI untuk Produktivitas Bisnis',
                'Keamanan & Kepatuhan TI (Cybersecurity & Compliance)'
            ].map((title, index) => (
                <Box
                key={index}
                sx={{
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    backgroundColor: '#add8e6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    padding: 2,
                    fontSize: 12,
                }}
                >
                {title}
                </Box>
            ))}
            </Box>
        </Box>
      )}

        </Box>
        </Grid>
   </Grid>
</Box>



<Box
  sx={{
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: isMobile ? "2400px" : "950px",
    position: "relative",
    justifyContent: "space-between",
    alignItems: "center",
    top: !isMobile ? -50 : 1150,
  }}
>
  {/* Bagian Kiri */}
  <Box
    sx={{
      width: "80%",
      height: "100%",
      backgroundColor: "#1f2123",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      padding: 4,
      position: "relative",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    }}
  />

  {/* Kontainer untuk teks dan box putih */}
  <Box
  sx={{
    display: "flex",
    flexDirection: "column", // Mengatur elemen dalam kolom (teks di atas, box di bawah)
    alignItems: "center",
    position: "absolute",
    left: "50%",
    top: !isMobile ? "50%" : "1200px",
    transform: "translate(-50%, -50%)",
    gap: 3, // Jarak antara elemen vertikal
  }}
>
  {/* Bagian Atas: Teks + 2 Box Putih */}
  <Box
    sx={{
      display: "flex",
      flexDirection: !isMobile ? "row" : "column",
      alignItems: "center",
      gap: 8, // Jarak antara teks dan box putih
    }}
  >
    {/* Teks Utama */}
    <Box>
      <Typography
        className="headline-blok-second"
        sx={{
          fontSize: !isMobile ? 50 : 30,
          maxWidth: 500,
          zIndex: 3,
          lineHeight: 1.2,
          textAlign: "left",
        }}
      >
        <FormattedMessage id="headline-3" />
      </Typography>

      <Typography
        className="deskripsi-blok-three"
        sx={{
          fontSize: !isMobile ? 20 : 16,
          maxWidth: 500,
          lineHeight: 1.5,
          zIndex: 3,
          textAlign: "left",
          marginTop: 1,
        }}
      >
        <FormattedMessage id="deskripsi-2" />
      </Typography>
    </Box>

    {/* Dua Box Putih di Samping */}
    <Box
  sx={{
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: 2,
  }}
>
  {/* ================= CARD 1 ================= */}
  <Box
    sx={{
      width: { xs: "100%", sm: 240 },
      height: 240,
      backgroundColor: "white",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      borderRadius: 3,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: 2,
    }}
  >
    <img
      src={icon10}
      style={{ width: 40, height: 40, marginBottom: 10 }}
      alt="icon"
    />

    <Typography
      sx={{ fontSize: 18, fontWeight: "bold" }}
      className="headline-blok-four"
    >
      Website
    </Typography>

    <Typography
      sx={{ marginBottom: 2, textAlign: "center" }}
      className="deskripsi-blok-four"
    >
      <FormattedMessage id="deskripsi-3" />
    </Typography>

    <Button
      onClick={() => {
        const section = document.getElementById("topik");
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }}
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 1,
        marginTop: 2,
      }}
    >
      <img src={icon8} style={{ width: 24, height: 24 }} alt="icon" />
      <Typography sx={{ textTransform: "none" }}>
        <FormattedMessage id="button-selengkapnya" />
      </Typography>
    </Button>
  </Box>

  {/* ================= CARD 2 ================= */}
  <Box
    sx={{
      width: { xs: "100%", sm: 240 },
      height: 240,
      backgroundColor: "white",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      borderRadius: 3,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: 2,
    }}
  >
    <img
      src={icon11}
      style={{ width: 40, height: 40, marginBottom: 10 }}
      alt="icon"
    />

    <Typography
      sx={{ fontSize: 18, fontWeight: "bold" }}
      className="headline-blok-four"
    >
      Dropbox
    </Typography>

    <Typography
      sx={{ marginBottom: 2, textAlign: "center" }}
      className="deskripsi-blok-four"
    >
      <FormattedMessage id="deskripsi-4" />
    </Typography>

    <Button
      onClick={() => {
        const section = document.getElementById("topik");
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }}
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 1,
        marginTop: 2,
      }}
    >
      <img src={icon8} style={{ width: 24, height: 24 }} alt="icon" />
      <Typography sx={{ textTransform: "none" }}>
        <FormattedMessage id="button-selengkapnya" />
      </Typography>
    </Button>
  </Box>
</Box>

  </Box>

  {/* Bagian Bawah: 4 Box Putih dalam Baris */}
<Box sx={{ mt: 5 }}>
  <Grid container spacing={4} justifyContent="center">

    {/* ==== CARD 1 ==== */}
    <Grid item xs={12} sm={6} md={3}>
      <Box
        sx={{
          width: { xs: "100%", md: "90%" },
          height: 240,
          backgroundColor: "white",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          borderRadius: 3,
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center"
        }}
      >
        <img src={icon12} style={{ width: 40, height: 40, marginBottom: 10 }} />

        <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
          Live Chat
        </Typography>

        <Typography sx={{ mb: 2, fontSize: 14 }}>
          <FormattedMessage id="deskripsi-5" />
        </Typography>

        <Button onClick={() => document.getElementById("topik")?.scrollIntoView({ behavior: "smooth" })}>
          <img src={icon8} style={{ width: 24, height: 24, marginRight: 8 }} />
          <FormattedMessage id="button-selengkapnya" />
        </Button>
      </Box>
    </Grid>

    {/* ==== CARD 2 ==== */}
    <Grid item xs={12} sm={6} md={3}>
      <Box
        sx={{
          width: { xs: "100%", md: "90%" },
          height: 240,
          backgroundColor: "white",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          borderRadius: 3,
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center"
        }}
      >
        <img src={icon13} style={{ width: 40, height: 40, marginBottom: 10 }} />

        <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
          Mailchimp
        </Typography>

        <Typography sx={{ mb: 2, fontSize: 14 }}>
          <FormattedMessage id="deskripsi-6" />
        </Typography>

        <Button onClick={() => document.getElementById("topik")?.scrollIntoView({ behavior: "smooth" })}>
          <img src={icon8} style={{ width: 24, height: 24, marginRight: 8 }} />
          <FormattedMessage id="button-selengkapnya" />
        </Button>
      </Box>
    </Grid>

    {/* ==== CARD 3 ==== */}
    <Grid item xs={12} sm={6} md={3}>
      <Box
        sx={{
          width: { xs: "100%", md: "90%" },
          height: 240,
          backgroundColor: "white",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          borderRadius: 3,
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center"
        }}
      >
        <img src={icon14} style={{ width: 40, height: 40, marginBottom: 10 }} />

        <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
          Slack
        </Typography>

        <Typography sx={{ mb: 2, fontSize: 14 }}>
          <FormattedMessage id="deskripsi-7" />
        </Typography>

        <Button onClick={() => document.getElementById("topik")?.scrollIntoView({ behavior: "smooth" })}>
          <img src={icon8} style={{ width: 24, height: 24, marginRight: 8 }} />
          <FormattedMessage id="button-selengkapnya" />
        </Button>
      </Box>
    </Grid>

    {/* ==== CARD 4 – TURUN KE BAWAH ==== */}
    <Grid
      item
      xs={12}
      md={3}
      sx={{ display: "flex", justifyContent: "center", mx: "auto" }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "90%" },
          height: 240,
          backgroundColor: "white",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          borderRadius: 3,
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center"
        }}
      >
        <img src={icon15} style={{ width: 40, height: 40, marginBottom: 10 }} />

        <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
          Messenger
        </Typography>

        <Typography sx={{ mb: 2, fontSize: 14 }}>
          <FormattedMessage id="deskripsi-8" />
        </Typography>

        <Button onClick={() => document.getElementById("topik")?.scrollIntoView({ behavior: "smooth" })}>
          <img src={icon8} style={{ width: 24, height: 24, marginRight: 8 }} />
          <FormattedMessage id="button-selengkapnya" />
        </Button>
      </Box>
    </Grid>

  </Grid>
</Box>

</Box>




  {/* Bagian Kanan */}
  <Box
    sx={{
      width: "40%",
      height: "100%",
      background: "linear-gradient(to bottom right, rgb(75, 102, 175), rgb(62, 104, 194), rgb(121, 199, 149))",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: 4,
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
    }}
  />
</Box>

<Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        height: "100vh",
        flexDirection: { xs: "column", md: "row" }, // Responsif: Kolom di layar kecil
        padding: { xs: 2, md: 6 },
        position: 'relative',
        top: !isMobile ? 100 : 1300
      }}
    >
      {/* Kiri - Teks & Fitur */}
      <Box
        sx={{
            display: isMobile ? "flex" : 'block',
            flexDirection: !isMobile ? "row" : "column",
            alignItems: "center", // Pusatkan secara vertikal
            justifyContent: !isMobile ? "flex-start" : "center", // Tengah hanya jika isMobile
            textAlign: !isMobile ? "left" : "center", // Sesuaikan align teks di mobile
            height: "100%", // Pastikan tinggi penuh
        }}
        >
        <Typography
          className="headline-drawer"
          sx={{
            fontSize: { xs: !isMobile ? 20 : 26, md: 45 },
            fontWeight: 700,
            width: { xs: !isMobile ? "100%" : "100%" , md:  700 },
            textAlign: "left",
            position: "relative",
            display: "block",
            marginBottom: 3,
          }}
        >
           <FormattedMessage id="headline-4" />
          <Box
            component="svg"
            xmlns="http://www.w3.org/2000/svg"
            sx={{
              position: "relative",
              left: !isMobile ? -35 : -33,
              top: { xs: !isMobile ? -10 : -20, md: -40 },
              width: "50%",
              maxWidth: 200,
              height: 10,
            }}
            viewBox="0 0 100 10"
            fill="none"
          >
            <path d="M0 2 C 25 8, 75 8, 100 2" stroke="blue" strokeWidth="2" fill="none" />
          </Box>
        </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {features.map((feature, index) => (
                  <FeatureBox key={index} {...feature} />
                ))}
              </Box>
            </Box>

            {/* Kanan - Gambar */}
            <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              position: "relative",
            }}
          >
          <img
            src={icon16}
            alt="Illustration"
            style={{
              maxWidth: isMobile ? "80%" : "100%",
              height: "auto",
              borderRadius: 16,
              position: "relative",     // <--- tambah ini
              top: isMobile ? 20 : 100,  // sekarang bisa turun
            }}
          />

        </Box>

    </Box>

<Box
  sx={{
    width: "100%",
    backgroundColor: "#1f2123",
    color: "white",
    py: { xs: 6, md: 10 },
    mt: { xs: 200, md: 40 },   // Mobile 20, Desktop 40
  }}
>
  <Container maxWidth="xl">
    <Grid 
      container 
      spacing={5}
    >

      {/* Kolom 1 */}
      <Grid item xs={12} md={3}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Product
        </Typography>
        <Typography className="menu-footer">Pricing</Typography>
        <Typography className="menu-footer">Benefits</Typography>
        <Typography className="menu-footer">Features</Typography>
        <Typography className="menu-footer">Product Demo</Typography>
        <Typography className="menu-footer">Visual Builder</Typography>
        <Typography className="menu-footer">Dynamic</Typography>
      </Grid>

      {/* Kolom 2 */}
      <Grid item xs={12} md={3}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Solutions
        </Typography>
        <Typography className="menu-footer">Marketing</Typography>
        <Typography className="menu-footer">Customer Support</Typography>
        <Typography className="menu-footer">Sales</Typography>
        <Typography className="menu-footer">Education</Typography>
        <Typography className="menu-footer">Course</Typography>
        <Typography className="menu-footer">Career</Typography>
      </Grid>

      {/* Kolom 3 */}
      <Grid item xs={12} md={3}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Integrations
        </Typography>
        <Typography className="menu-footer">Chat Widget</Typography>
        <Typography className="menu-footer">LiveChat</Typography>
        <Typography className="menu-footer">HelpDesk</Typography>
        <Typography className="menu-footer">Facebook Messenger</Typography>
        <Typography className="menu-footer">Shopify</Typography>
        <Typography className="menu-footer">Slack</Typography>
      </Grid>

      {/* Kolom 4 */}
      <Grid item xs={12} md={3}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Resources
        </Typography>
        <Typography className="menu-footer">Help Center</Typography>
        <Typography className="menu-footer">API & Developers</Typography>
        <Typography className="menu-footer">ChatBot Academy</Typography>
        <Typography className="menu-footer">Blog</Typography>
        <Typography className="menu-footer">Chatbot Best Practices</Typography>
        <Typography className="menu-footer">System Status</Typography>
      </Grid>

    </Grid>
  </Container>
</Box>

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
    );
}
