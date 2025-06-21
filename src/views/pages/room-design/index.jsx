
import { useState, useEffect } from 'react';
import {
  Grid, TextField, Slider, MenuItem, FormControl, InputLabel, Select, Typography,
  RadioGroup, FormControlLabel, Radio, Box, Button, Dialog, DialogTitle, DialogContent, DialogActions,
  Checkbox, InputAdornment, Switch
} from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';

export default function RoomDesignPage() {
  const [height, setHeight] = useState(200);
  const [width, setWidth] = useState(100);
  const [depth, setDepth] = useState(30);
  const [parts, setParts] = useState(3);
  const [color, setColor] = useState('wood');
  const [design, setDesign] = useState('simple');
  const [glass, setGlass] = useState('normal');
  const [hasBorder, setHasBorder] = useState(false);
  const [isTransparent, setIsTransparent] = useState(false);
  const [texture, setTexture] = useState('matte');
  const [glow, setGlow] = useState(false);
  const [cornerRadius, setCornerRadius] = useState(4);
  const [shadow, setShadow] = useState(true);
  const [price, setPrice] = useState(0);
  const [orderOpen, setOrderOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', age: '', phone: '', comment: '' });

  useEffect(() => {
    let base = 100;
    base += height * 0.3 + width * 0.2 + depth * 0.15;
    base += parts * 20;
    base += design === 'patterned' ? 40 : design === 'lined' ? 25 : 0;
    base += glass === 'toned' ? 25 : 0;
    base += hasBorder ? 15 : 0;
    base += isTransparent ? 10 : 0;
    base += texture === 'glossy' ? 20 : 0;
    base += glow ? 10 : 0;
    base += shadow ? 5 : 0;
    base += cornerRadius;
    setPrice(Math.round(base));
  }, [height, width, depth, parts, color, design, glass, hasBorder, isTransparent, texture, glow, cornerRadius, shadow]);

  const colors = {
    wood: '#a0522d',
    white: '#ffffff',
    black: '#000000',
    grey: '#999999',
    blue: '#0074cc',
    red: '#ff4444',
    green: '#4caf50',
    yellow: '#ffc107'
  };

  const convertToMeters = (val) => (val / 100).toFixed(2);

  return (
    <MainCard title="🏯 Rom Dizayn Advanced">
      <Grid container spacing={3} sx={{ flexWrap: 'nowrap', minWidth: '900px' }}>
        {/* Left: Form Section */}
        <Grid item xs={12} md={7} sx={{ flex: 1 }}>
          <Typography variant="h6">Dizayn Formasi</Typography>

          <TextField label="Balandlik" type="number" fullWidth value={height} onChange={(e) => setHeight(+e.target.value)}
            margin="normal" helperText={`↑ ${convertToMeters(height)} M`} inputProps={{ min: 100, max: 400 }}
            InputProps={{ endAdornment: <InputAdornment position="end">sm</InputAdornment> }} />

          <TextField label="Kenglik" type="number" fullWidth value={width} onChange={(e) => setWidth(+e.target.value)}
            margin="normal" helperText={`↔ ${convertToMeters(width)} M`} inputProps={{ min: 50, max: 300 }}
            InputProps={{ endAdornment: <InputAdornment position="end">sm</InputAdornment> }} />

          <TextField label="Chuqurlik" type="number" fullWidth value={depth} onChange={(e) => setDepth(+e.target.value)}
            margin="normal" helperText={`🔽 ${convertToMeters(depth)} M`} inputProps={{ min: 10, max: 100 }}
            InputProps={{ endAdornment: <InputAdornment position="end">sm</InputAdornment> }} />

          <Box sx={{ mt: 2 }}>
            <Typography gutterBottom>Qism soni: {parts}</Typography>
            <Slider value={parts} onChange={(e, v) => setParts(v)} min={1} max={12} step={1} valueLabelDisplay="auto" />
          </Box>

          <FormControl fullWidth margin="normal">
            <InputLabel>Rang</InputLabel>
            <Select value={color} label="Rang" onChange={(e) => setColor(e.target.value)}>
              {Object.entries(colors).map(([key]) => (
                <MenuItem key={key} value={key}>{key.toUpperCase()}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel>Yuzasi</InputLabel>
            <Select value={texture} label="Yuzasi" onChange={(e) => setTexture(e.target.value)}>
              <MenuItem value="matte">Matt</MenuItem>
              <MenuItem value="glossy">Yaltiragan</MenuItem>
              <MenuItem value="brushed">To'qimalangan</MenuItem>
            </Select>
          </FormControl>

          <FormControl component="fieldset" margin="normal">
            <Typography>Dizayn turi</Typography>
            <RadioGroup value={design} onChange={(e) => setDesign(e.target.value)} row>
              <FormControlLabel value="simple" control={<Radio />} label="Soddalashgan" />
              <FormControlLabel value="patterned" control={<Radio />} label="Naqshli" />
              <FormControlLabel value="lined" control={<Radio />} label="Chiziqli" />
            </RadioGroup>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel>Shisha turi</InputLabel>
            <Select value={glass} label="Shisha" onChange={(e) => setGlass(e.target.value)}>
              <MenuItem value="normal">Oddiy</MenuItem>
              <MenuItem value="toned">Tonirovka</MenuItem>
              <MenuItem value="frosted">Soyalangan</MenuItem>
              <MenuItem value="crystal">Kristall</MenuItem>
            </Select>
          </FormControl>

          <FormControlLabel control={<Checkbox checked={hasBorder} onChange={(e) => setHasBorder(e.target.checked)} />} label="Ramka" />
          <FormControlLabel control={<Checkbox checked={isTransparent} onChange={(e) => setIsTransparent(e.target.checked)} />} label="Shaffoflik" />
          <FormControlLabel control={<Checkbox checked={glow} onChange={(e) => setGlow(e.target.checked)} />} label="Yorqin kontur" />
          <FormControlLabel control={<Checkbox checked={shadow} onChange={(e) => setShadow(e.target.checked)} />} label="Soyali ko‘rinish" />

          <Typography gutterBottom sx={{ mt: 2 }}>Burchak radiusi: {cornerRadius}px</Typography>
          <Slider value={cornerRadius} onChange={(e, v) => setCornerRadius(v)} min={0} max={32} step={2} valueLabelDisplay="auto" />

          <Typography variant="h6" sx={{ mt: 2 }}>💰 Umumiy narx: <strong>{price} ming so‘m</strong></Typography>

          <Button variant="contained" sx={{ mt: 3 }} onClick={() => setOrderOpen(true)}>Zakaz berish</Button>
        </Grid>

        {/* Right: Preview Section */}
        <Grid item xs={12} md={5} sx={{ flex: 1 }}>
          <Typography variant="h6">Preview</Typography>
          <Box
            sx={{
              position: 'sticky',
              top: 100,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              zIndex: 10,
              backgroundColor: 'background.paper',
              pb: 2
            }}
          >
            <Typography variant="caption" sx={{ mb: 1 }}>{convertToMeters(height)} M</Typography>
            <Box
              sx={{
                border: '2px solid #ccc',
                height: 400, // 🔼 kattaroq qilindi
                width: 300,  // 🔼 kengroq
                maxWidth: '100%',
                backgroundColor: colors[color],
                borderRadius: cornerRadius,
                display: 'flex',
                justifyContent: 'space-between',
                overflow: 'hidden',
                position: 'relative',
                opacity: isTransparent ? 0.8 : 1,
                boxShadow: shadow ? '0px 8px 20px rgba(0,0,0,0.2)' : 'none',
                outline: glow ? '2px solid gold' : 'none'
              }}
            >
              {[...Array(parts)].map((_, i) => (
                <Box
                  key={i}
                  sx={{
                    flex: 1,
                    borderLeft: i !== 0 ? '1px solid #eee' : 'none',
                    backgroundImage:
                      design === 'patterned'
                        ? 'repeating-linear-gradient(45deg, rgba(255,255,255,0.3), rgba(255,255,255,0.3) 10px, transparent 10px, transparent 20px)'
                        : design === 'lined'
                          ? 'repeating-linear-gradient(to bottom, rgba(255,255,255,0.3) 0, rgba(255,255,255,0.3) 5px, transparent 5px, transparent 10px)'
                          : 'none'
                  }}
                ></Box>
              ))}
            </Box>
            <Typography variant="caption" sx={{ mt: 1 }}>{convertToMeters(width)} M</Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Zakaz Modal */}
      <Dialog open={orderOpen} onClose={() => setOrderOpen(false)}>
        <DialogTitle>Zakaz qilish</DialogTitle>
        <DialogContent>
          <TextField label="Ism" fullWidth margin="dense" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
          <TextField label="Yosh" type="number" fullWidth margin="dense" value={formData.age} onChange={(e) => setFormData({ ...formData, age: e.target.value })} />
          <TextField label="Telefon raqami" fullWidth margin="dense" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
          <TextField label="Qo‘shimcha izoh" fullWidth multiline rows={3} margin="dense" value={formData.comment} onChange={(e) => setFormData({ ...formData, comment: e.target.value })} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOrderOpen(false)}>Bekor qilish</Button>
          <Button variant="contained" onClick={() => {
            console.log('Zakaz:', { ...formData, narx: price });
            setOrderOpen(false);
          }}>Yuborish</Button>
        </DialogActions>
      </Dialog>
    </MainCard>

  );
}