import Typography from '@mui/joy/Typography';

export default function Title({ children }) {
  return (
    <Typography level="h1" fontSize="xl" gutterBottom color='black'>
      {children}
    </Typography>
  );
}