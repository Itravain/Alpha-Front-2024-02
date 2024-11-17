// src/pages/cadastro.js
import React from "react";
import {
  Container,
  TextField,
  FormControlLabel,
  Grid2,
  Checkbox,
  Button,
  Typography,
  Box,
} from "@mui/material";

const Cadastro = () => {
  return (
    <Container
      sx={{
        height: "100vh", // Tela cheia
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to bottom right, #0f2d27, #244036)", // Fundo degradê
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.1)", // Fundo semitransparente para destaque
          padding: 4,
          borderRadius: 2,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", // Sombra para o formulário
          width: "100%",
          maxWidth: 600, // Largura máxima do formulário
        }}
      >
        <Typography variant="h4" color="white" sx={{ mb: 4 }}>
          Cadastro
        </Typography>
        <Grid2 container spacing={2}>
          {/* Nome e CPF */}
          <Grid2 xs={12} sm={6}>
            <TextField
              fullWidth
              label="Nome"
              variant="outlined"
              InputProps={{ style: { background: "#e0e0e0", borderRadius: 5 } }}
            />
          </Grid2>
          <Grid2 xs={12} sm={6}>
            <TextField
              fullWidth
              label="CPF"
              variant="outlined"
              InputProps={{ style: { background: "#e0e0e0", borderRadius: 5 } }}
            />
          </Grid2>

          {/* E-mail */}
          <Grid2 xs={12}>
            <TextField
              fullWidth
              label="E-mail"
              variant="outlined"
              InputProps={{ style: { background: "#e0e0e0", borderRadius: 5 } }}
            />
          </Grid2>

          {/* Senha e Confirmar senha */}
          <Grid2 xs={12} sm={6}>
            <TextField
              fullWidth
              label="Senha"
              type="password"
              variant="outlined"
              InputProps={{ style: { background: "#e0e0e0", borderRadius: 5 } }}
            />
          </Grid2>
          <Grid2 xs={12} sm={6}>
            <TextField
              fullWidth
              label="Confirme sua senha"
              type="password"
              variant="outlined"
              InputProps={{ style: { background: "#e0e0e0", borderRadius: 5 } }}
            />
          </Grid2>

          {/* Checkbox */}
          <Grid2 xs={12} sm={6}>
            <Typography color="white">É cliente Tina?</Typography>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Sim"
              sx={{ color: "white" }}
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Não"
              sx={{ color: "white" }}
            />
          </Grid2>

          {/* Botão de continuar */}
          <Grid2 xs={12} sm={6} display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#3f704d",
                color: "white",
                paddingX: 4,
                paddingY: 1,
                "&:hover": { backgroundColor: "#35603d" },
              }}
            >
              Continuar
            </Button>
          </Grid2>

          {/* Link de login */}
          <Grid2 xs={12} textAlign="center">
            <Typography color="white">
              Já tem uma conta?{" "}
              <Typography
                component="span"
                sx={{ color: "#9ccc65", cursor: "pointer" }}
              >
                Faça login!
              </Typography>
            </Typography>
          </Grid2>
        </Grid2>
      </Box>
    </Container>
  );
};

export default Cadastro;
