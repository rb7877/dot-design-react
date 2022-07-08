
import React from "react";
import style from "../../style.module.scss";
import cx from "./Dashboard.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";
import { Card, Row, Col } from "react-bootstrap";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  scales: {
    y: {
      ticks: {
        display: false,
      }
    },
    x: {
      ticks: {
        autoSkip: false,
        maxRotation: 85,
        minRotation: 85
      }
    }
  },
  plugins: {
    legend: {
      display: false,

    },

  },
  borderDashOffset: 9

};

const labels = ['Jan 2021', 'Feb 2021', 'Mar 2021', 'Apr 2021', 'May 2021', 'Jun 2021', 'Jul 2021', 'Aug 2021', 'Sep 2021', 'Oct 2021', 'Nov 2021', 'Dec 2021'];

export const data = {
  labels,
  datasets: [
    {
      label: '',
      data: [1, 220, 301, 801, 700, 500, 530, 830, 900, 925, 1000, 1210],
      borderColor: '#5498fd',
      backgroundColor: '#5498fd',
    },
  ],

};
export default function Dashboard() {
  return (
    <>
      <Header />
      <Sidebar />
      <section className={`${style.pageWrapper}`}>
        <Card className="mb-4">
          <Card.Title>
            <Row className={`align-items-center ${style.rowTitle}`}>
              <Col className={`${style.rowTitleLeft}`} lg={6}>
                <h5>
                  Analytics For: 2022-05-13</h5>
              </Col>
              <Col className={`${style.rowTitleRight}`} lg={6}>
                <button className={`btn ${style.width100}`}>+ Add Restaurant</button>

              </Col>
            </Row>
          </Card.Title>
          <Col className={`${style.filterMain}`}>
          <Row className={`${style.filterRowMain}`}>
                <Col className={`${style.filterRowBox}`}>
                  <button className={`btn active ${style.filterB}`}>General</button>
                </Col>
                <Col className={`${style.filterRowBox}`}>
                  <button className={`btn ${style.filterB}`}>Branches</button>
                </Col>
                <Col className={`${style.filterRowBox}`}>
                  <button className={`btn ${style.filterB}`}>Inventory</button>
                </Col>
                <Col className={`${style.filterRowBox}`}>
                  <button className={`btn ${style.filterB}`}>Call Center</button>
                </Col>
              </Row>
              </Col>  
          <Card.Body style={{ minHeight: "600px" }}>
            <Row>
              <Col md={6} lg={4} xl={3}>
                <div className={`${cx.cardBox}`}>
                  <p>Income</p>
                  <h3>646</h3>
                  <div className={`${cx.graphBox}`}>
                    <Line height={200} width={200} options={options} data={data} />
                  </div>
                </div>
              </Col>
              <Col md={6} lg={4} xl={3}>
                <div className={`${cx.cardBox}`}>
                  <p>Return (SAR)</p>
                  <h3>51,257.826</h3>
                  <div className={`${cx.graphBox}`}>
                    <Line height={200} width={200} options={options} data={data} />
                  </div>
                </div>
              </Col>
              <Col md={6} lg={4} xl={3}>
                <div className={`${cx.cardBox}`}>
                  <p>Orders</p>
                  <h3>646</h3>
                  <div className={`${cx.graphBox}`}>
                    <Line height={200} width={200} options={options} data={data} />
                  </div>
                </div>
              </Col>
              <Col md={6} lg={4} xl={3}>
                <div className={`${cx.cardBox}`}>
                  <p>Income</p>
                  <h3>646</h3>
                  <div className={`${cx.graphBox}`}>
                    <Line height={200} width={200} options={options} data={data} />
                  </div>
                </div>
              </Col>
              <Col md={6} lg={4} xl={3}>
                <div className={`${cx.cardBox}`}>
                  <p>Income</p>
                  <h3>646</h3>
                  <div className={`${cx.graphBox}`}>
                    <Line height={200} width={200} options={options} data={data} />
                  </div>
                </div>
              </Col>
              <Col md={6} lg={4} xl={3}>
                <div className={`${cx.cardBox}`}>
                  <p>Income</p>
                  <h3>646</h3>
                  <div className={`${cx.graphBox}`}>
                    <Line height={200} width={200} options={options} data={data} />
                  </div>
                </div>
              </Col>
              <Col md={6} lg={4} xl={3}>
                <div className={`${cx.cardBox}`}>
                  <p>Income</p>
                  <h3>646</h3>
                  <div className={`${cx.graphBox}`}>
                    <Line height={200} width={200} options={options} data={data} />
                  </div>
                </div>
              </Col>


            </Row>
          </Card.Body>
        </Card>

        <Card className="mt-4">
          <Card.Title>
            <Row className={`align-items-center mb-2 ${style.rowTitle}`}>
              <Col className={`${style.rowTitleLeft}`} lg={12}>
                <h5>Earnings By ORDERS</h5>
              </Col>
            </Row>
          </Card.Title>
          <Card.Body>
            <div className="table-responsive">
              <table className={`table m-0 ${cx.simpleTable}`}>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Reference</th>
                    <th>Branch</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2020-04-14</td>
                    <td>xxx2022</td>
                    <td>Mall 1</td>
                    <td>$224.00</td>
                    <td>$224.00</td>
                  </tr>
                  <tr>
                    <td>2020-04-14</td>
                    <td>xxx2022</td>
                    <td>Mall 1</td>
                    <td>$224.00</td>
                    <td>$224.00</td>
                  </tr>
                  <tr>
                    <td>2020-04-14</td>
                    <td>xxx2022</td>
                    <td>Mall 1</td>
                    <td>$224.00</td>
                    <td>$224.00</td>
                  </tr>
                  <tr>
                    <td>2020-04-14</td>
                    <td>xxx2022</td>
                    <td>Mall 1</td>
                    <td>$224.00</td>
                    <td>$224.00</td>
                  </tr>

                </tbody>
              </table>
            </div>

          </Card.Body>
        </Card>
      </section>
      <Footer />
    </>
  );
}
