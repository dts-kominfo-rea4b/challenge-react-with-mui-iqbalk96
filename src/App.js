import './App.css';

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
import Header from './components/Header';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import { Container, Grid } from '@mui/material';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  return (
    <div className="App">
      <Header />
      <Container>
        <Grid container
          direction="row"
          spacing={2} columns={16}>
          <Grid item xs={8}>
            <ContactForm />
          </Grid>
          <Grid item xs={8}>
            <Contact data={contactsJSON} />
          </Grid>
        </Grid>
      </Container >
    </div>
  );
};

export default App;
