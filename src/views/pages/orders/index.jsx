import { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import Typography from '@mui/material/Typography';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Box } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const mockOrders = [
  {
    id: 1,
    name: 'Ali Valiyev',
    age: 32,
    phone: '+998901234567',
    comment: 'Eshik yuqori sifatli bo‘lsin.',
    price: 540,
    date: '2025-06-21'
  },
  {
    id: 2,
    name: 'Zarina Karimova',
    age: 27,
    phone: '+998913456789',
    comment: 'Shisha kristall bo‘lsin.',
    price: 610,
    date: '2025-06-20'
  },
  {
    id: 3,
    name: 'Javlon Qodirov',
    age: 40,
    phone: '+998933333333',
    comment: 'Naqshli eshik, chapga ochiladigan.',
    price: 720,
    date: '2025-06-18'
  }
];

export default function OrdersPage() {
  const [orders] = useState(mockOrders);

  return (
    <MainCard title="📦 Buyurtmalar (Admin)">
      <Typography variant="h6" gutterBottom>
        Umumiy buyurtmalar ro‘yxati
      </Typography>
      <TableContainer component={Paper} sx={{ maxHeight: 500 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>👤 Mijoz</TableCell>
              <TableCell>📞 Telefon</TableCell>
              <TableCell>💬 Izoh</TableCell>
              <TableCell>💰 Narx (ming so‘m)</TableCell>
              <TableCell>📅 Sana</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id} hover>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Avatar>
                      <PersonIcon />
                    </Avatar>
                    <Box>
                      <Typography>{order.name}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        {order.age} yosh
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>{order.phone}</TableCell>
                <TableCell>{order.comment}</TableCell>
                <TableCell>{order.price}</TableCell>
                <TableCell>{order.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainCard>
  );
}