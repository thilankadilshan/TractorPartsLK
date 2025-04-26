import Header from "../../../components/Header/Header";
import ShopBanner from "../../../components/ShopBanner/ShopBanner";
import TrustedSeller from "../../../components/TrustedSeller/TrustedSeller"; // Example
import "./ShopsPage.css";

function ShopsPage() {
  return (
    <div className="shops-page">
      <Header />
      <ShopBanner />
      <div id="trusted-sellers">
        <TrustedSeller />
      </div>
      {/* More components later */}
    </div>
  );
}

export default ShopsPage;
