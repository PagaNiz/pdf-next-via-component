'use client'
import { Document, PDFViewer, Page, View } from "@react-pdf/renderer";
import ReactDOMServer from "react-dom/server";
import { Html } from "react-pdf-html";
import Intermedio from "../Intermedio/Index";

const DownloaderPDF = () => {
    const html = ReactDOMServer.renderToStaticMarkup(<Intermedio />);
    return (
        <div style={{ width: `100%`, height: `100vh` }}>
            <PDFViewer style={{ width: '100%', height: '100%' }}>
                <Document>
                    <Page style={{padding: '25px 0'}}>
                        <View>
                            <Html>{html.toString()}</Html>
                        </View>
                    </Page>
                </Document>
            </PDFViewer>
        </div>
    )
}

export default DownloaderPDF;