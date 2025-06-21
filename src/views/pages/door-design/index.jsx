import { useState, useEffect } from 'react';
import {
  Grid, TextField, Slider, MenuItem, FormControl, InputLabel, Select, Typography,
  RadioGroup, FormControlLabel, Radio, Box, Button, Dialog, DialogTitle, DialogContent, DialogActions,
  Checkbox, InputAdornment
} from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';

export default function DoorDesignPage() {
  const [height, setHeight] = useState(210);
  const [width, setWidth] = useState(90);
  const [depth, setDepth] = useState(4);
  const [color, setColor] = useState('wood');
  const [design, setDesign] = useState('simple');
  const [glass, setGlass] = useState('none');
  const [hasBorder, setHasBorder] = useState(true);
  const [isTransparent, setIsTransparent] = useState(false);
  const [texture, setTexture] = useState('matte');
  const [glow, setGlow] = useState(false);
  const [cornerRadius, setCornerRadius] = useState(6);
  const [shadow, setShadow] = useState(true);
  const [handleType, setHandleType] = useState('classic');
  const [openDirection, setOpenDirection] = useState('right');
  const [price, setPrice] = useState(0);
  const [orderOpen, setOrderOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', age: '', phone: '', comment: '' });

  useEffect(() => {
    let base = 120;
    base += height * 0.25 + width * 0.3 + depth * 0.5;
    base += design === 'patterned' ? 50 : design === 'lined' ? 30 : 0;
    base += glass === 'toned' ? 40 : glass === 'crystal' ? 60 : 0;
    base += hasBorder ? 20 : 0;
    base += isTransparent ? 15 : 0;
    base += texture === 'glossy' ? 30 : texture === 'brushed' ? 15 : 0;
    base += glow ? 10 : 0;
    base += shadow ? 5 : 0;
    base += cornerRadius;
    base += handleType === 'modern' ? 20 : handleType === 'luxury' ? 40 : 10;
    base += openDirection === 'double' ? 30 : 0;
    setPrice(Math.round(base));
  }, [height, width, depth, color, design, glass, hasBorder, isTransparent, texture, glow, cornerRadius, shadow, handleType, openDirection]);

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
    <MainCard title="🚪 Eshik Dizayn Tizimi">
      <Grid container spacing={3} sx={{ flexWrap: 'nowrap', minWidth: '900px' }}>
        <Grid item xs={12} md={7} sx={{ flex: 1 }}>
          <Typography variant="h6">Parametrlar</Typography>

          <TextField label="Balandlik" type="number" fullWidth value={height} onChange={(e) => setHeight(+e.target.value)}
            margin="normal" helperText={`↑ ${convertToMeters(height)} M`} inputProps={{ min: 180, max: 250 }}
            InputProps={{ endAdornment: <InputAdornment position="end">sm</InputAdornment> }} />

          <TextField label="Kenglik" type="number" fullWidth value={width} onChange={(e) => setWidth(+e.target.value)}
            margin="normal" helperText={`↔ ${convertToMeters(width)} M`} inputProps={{ min: 60, max: 120 }}
            InputProps={{ endAdornment: <InputAdornment position="end">sm</InputAdornment> }} />

          <TextField label="Qalinlik" type="number" fullWidth value={depth} onChange={(e) => setDepth(+e.target.value)}
            margin="normal" helperText={`🔽 ${depth} mm`} inputProps={{ min: 2, max: 10 }} />

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
              <FormControlLabel value="simple" control={<Radio />} label="Oddiy" />
              <FormControlLabel value="patterned" control={<Radio />} label="Naqshli" />
              <FormControlLabel value="lined" control={<Radio />} label="Chiziqli" />
            </RadioGroup>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel>Shisha</InputLabel>
            <Select value={glass} label="Shisha" onChange={(e) => setGlass(e.target.value)}>
              <MenuItem value="none">Yo‘q</MenuItem>
              <MenuItem value="toned">Tonirovka</MenuItem>
              <MenuItem value="crystal">Kristall</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel>Tutqich</InputLabel>
            <Select value={handleType} label="Tutqich" onChange={(e) => setHandleType(e.target.value)}>
              <MenuItem value="classic">Klassik</MenuItem>
              <MenuItem value="modern">Zamonaviy</MenuItem>
              <MenuItem value="luxury">Luks</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel>Ochilish yo‘nalishi</InputLabel>
            <Select value={openDirection} label="Ochilish" onChange={(e) => setOpenDirection(e.target.value)}>
              <MenuItem value="right">O‘ngga</MenuItem>
              <MenuItem value="left">Chapga</MenuItem>
              <MenuItem value="double">Ikkala tomonga</MenuItem>
            </Select>
          </FormControl>

          <FormControlLabel control={<Checkbox checked={hasBorder} onChange={(e) => setHasBorder(e.target.checked)} />} label="Ramkasi bor" />
          <FormControlLabel control={<Checkbox checked={isTransparent} onChange={(e) => setIsTransparent(e.target.checked)} />} label="Shaffof" />
          <FormControlLabel control={<Checkbox checked={glow} onChange={(e) => setGlow(e.target.checked)} />} label="Yorqin kontur" />
          <FormControlLabel control={<Checkbox checked={shadow} onChange={(e) => setShadow(e.target.checked)} />} label="Soyali" />

          <Typography gutterBottom sx={{ mt: 2 }}>Burchak radiusi: {cornerRadius}px</Typography>
          <Slider value={cornerRadius} onChange={(e, v) => setCornerRadius(v)} min={0} max={32} step={2} valueLabelDisplay="auto" />

          <Typography variant="h6" sx={{ mt: 2 }}>💰 Narx: <strong>{price} ming so‘m</strong></Typography>

          <Button variant="contained" sx={{ mt: 3 }} onClick={() => setOrderOpen(true)}>Zakaz berish</Button>
        </Grid>

        <Grid item xs={12} md={5} sx={{ flex: 1 }}>
          <Typography variant="h6">Ko‘rinish</Typography>
          <Box sx={{
            mt: 2,
            position: 'relative',
            width: 250,
            height: 500,
            backgroundColor: colors[color],
            borderRadius: `${cornerRadius}px`,
            opacity: isTransparent ? 0.8 : 1,
            boxShadow: shadow ? '0px 10px 20px rgba(0,0,0,0.3)' : 'none',
            outline: glow ? '2px solid gold' : 'none',
            border: hasBorder ? '2px solid #333' : 'none',
            backgroundImage:
              design === 'patterned' ? 'repeating-linear-gradient(45deg, rgba(255,255,255,0.2), transparent 10px)' :
              design === 'lined' ? 'repeating-linear-gradient(to bottom, rgba(255,255,255,0.2) 2px, transparent 4px)' : 'none',
          }}>
            {/* Handle */}
            <Box sx={{
              position: 'absolute',
              top: '50%',
              [openDirection === 'right' ? 'right' : 'left']: 8,
              width: 12,
              height: 40,
              backgroundColor: '#222',
              borderRadius: '6px',
              transform: 'translateY(-50%)'
            }} />
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
          <TextField label="Izoh" fullWidth multiline rows={3} margin="dense" value={formData.comment} onChange={(e) => setFormData({ ...formData, comment: e.target.value })} />
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
