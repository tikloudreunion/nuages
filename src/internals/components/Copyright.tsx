import Typography from '@mui/material/Typography';

export default function Copyright(props: React.ComponentProps<typeof Typography>) {
  return (
    <Typography
      variant="body2"
      align="center"
      {...props}
      sx={[
        {
          color: 'text.secondary',
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    >
      {'Copyright © '}
        Ti Kloud Réunion.
      {' '}
      {new Date().getFullYear()}
      {'. '}
        Licensed under the MIT License
    </Typography>
  );
}
