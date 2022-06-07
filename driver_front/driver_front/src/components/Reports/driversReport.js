import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
const DriversReport = () => {
  const [formDriver, setFormDriver] = useState([
    {
      name: "",
      age: "",
      address: "",
      sexo: "",
      city: "",
    },
  ]);

  async function loadDrivers() {
    const response = await axios.get("http://localhost:8080/drivers");

    setFormDriver(response.data);
    console.log("teste 1: ", response.data);
  }
  console.log("teste: ", formDriver);

  useEffect(() => {
    loadDrivers();
  }, []);

  return (
    <Document>
      {/* {formDriver.map((driver, index) => { */}
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>{"driver.name"}</Text>
        </View>
        <View style={styles.section}>
          <Text>{"driver.address"}</Text>
        </View>
      </Page>
      {/* })} */}
    </Document>
  );
};

export default DriversReport;
