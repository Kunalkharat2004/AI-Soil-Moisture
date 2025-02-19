import useTokenStore from "../../store/userTokenStore";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import { Navigate, Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import ScrollToTop from "../common/ScrollToTop";

const MainLayout = () => {
	// const { token } = useTokenStore((state) => state);

	// if (!token) {
	// 	return <Navigate to={"/auth/login"} replace />;
	// }

	return (
		<>
			<div className="flex flex-col min-h-screen">
				<ScrollToTop/>
				<Navbar />
				<main className="flex-grow">
					<Outlet />
				</main>
				<Footer />
			</div>
		</>
	);
};

export default MainLayout;
