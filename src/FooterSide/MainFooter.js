import './MainFooter.css';
const FooterCreate = () => {
  return (
    <footer className="footer footer-sticky">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>CerrahVINLY</h5>
            <p1>1890'dan beri ailenizin</p1>
          </div>
          <div className="col-md-3">
            <h5>Hızlı Bağlantılar</h5>
            <ul className="list-unstyled">
              <li><a href="#!">Ana Sayfa</a></li>
              <li><a href="#!">Hakkımızda</a></li>
              <li><a href="#!">İletişim</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>İletişim</h5>
            <address>
              <p>Adres satırı 1<br />
              Adres satırı 2<br />
              Telefon: (123) 456-7890</p>
            </address>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12 text-center">
            <p>© {new Date().getFullYear()} CerrahVINLY. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCreate;