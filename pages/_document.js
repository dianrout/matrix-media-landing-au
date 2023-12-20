import Document, { Head, Html, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script src="assets/js/jquery.min.js"></script>

          <script src="assets/js/bootstrap.bundle.min.js"></script>

          <script src="assets/js/wow.min.js"></script>

          <script src="assets/js/owl.carousel.min.js"></script>

          <script src="assets/js/jquery.magnific-popup.min.js"></script>

          <script src="assets/js/meanmenu.js"></script>

          <script src="assets/js/jquery.ajaxchimp.min.js"></script>

          <script src="assets/js/form-validator.min.js"></script>

          <script src="assets/js/contact-form-script.js"></script>

          <script src="assets/js/custom.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
