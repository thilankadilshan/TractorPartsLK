import React from "react";
import "./EventsPage.css";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

function EventsPage() {
  return (
    <div className="events-page">
      <Header />

      <section className="events-hero">
        <h1>Latest Tractor Events & News</h1>
        <p>Stay updated with workshops, training, and service announcements</p>
      </section>

      <section className="events-grid">
        <div className="event-card">
          <h3>🛠️ Tractor Maintenance Workshop</h3>
          <p>June 10, 2025 - Punjab</p>
          <p>
            Learn basic and advanced tractor maintenance techniques from
            experts. Registration open now!
          </p>
        </div>

        <div className="event-card">
          <h3>📣 New Spare Parts Expo</h3>
          <p>July 1–3, 2025 - Nagpur</p>
          <p>
            India's largest tractor parts exhibition, featuring OEM suppliers
            and discounts on bulk orders.
          </p>
        </div>

        <div className="event-card">
          <h3>🌾 Smart Farming Demo</h3>
          <p>May 20, 2025 - Online</p>
          <p>
            Discover new tractor-compatible smart tools and GPS technologies for
            efficient field work.
          </p>
        </div>
      </section>

      <section className="news-updates">
        <h2>Latest News</h2>
        <ul>
          <li>
            ✅ Govt subsidy increased for diesel tractors in rural zones
            (2025-04-30)
          </li>
          <li>
            ✅ Mahindra announces 5-year warranty on new models (2025-03-15)
          </li>
          <li>
            ✅ Spare parts delivery network expanded to 1,500 rural outlets
          </li>
        </ul>
      </section>

      <Footer />
    </div>
  );
}

export default EventsPage;
