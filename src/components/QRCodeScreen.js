// src/screens/QRCodeScreen.js
import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { Container, Content, Text, Spinner } from "native-base";

const QRCodeScreen = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      setData(JSON.stringify(response.data));
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return (
      <Container>
        <Content contentContainerStyle={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Spinner color="blue" />
        </Content>
      </Container>
    );
  }

  return (
    <Container>
      <Content contentContainerStyle={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 24, marginBottom: 20 }}>QR Code</Text>
        <QRCode value={data} size={200} />
      </Content>
    </Container>
  );
};

export default QRCodeScreen;
