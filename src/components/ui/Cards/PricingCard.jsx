import { Card, CardContent, Typography, Button, Box, Stack } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const PricingCard = ({ title, description, price, features, buttonLabel }) => {
    return (
        <Card
            sx={{
                width: 336,
                height: 455,
                borderRadius: '20px',
                backgroundColor: '#F1F1F1',
                padding: '32px 24px',
            }}
        >
            <CardContent sx={{ p: 0, '&:last-child': { paddingBottom: 0 } }}>
                <Stack alignItems="center" sx={{ p: 0 }}>
                    <Box textAlign="center">
                        <Typography
                            fontFamily="Poppins, sans-serif"
                            fontSize="32px"
                            lineHeight="32px"
                            fontWeight={500}
                            color="#000000"
                            textAlign="center"
                            pb={2}
                        >
                            {title}
                        </Typography>
                        <Typography
                            fontFamily="sans-serif"
                            fontSize="16px"
                            lineHeight={1.5}
                            fontWeight={400}
                            color="rgba(0, 0, 0, 0.7)"
                            width="312px"
                            mx="auto"
                            textAlign="center"
                            maxWidth="240px"
                            sx={{ whiteSpace: 'pre-line' }}
                        >
                            {description}
                        </Typography>
                    </Box>
                    <Typography
                        fontFamily="sans-serif"
                        fontSize="32px"
                        lineHeight={3}
                        fontWeight={500}
                        color="#000000"
                        textAlign="center"
                        m={0}
                    >
                        {price}
                    </Typography>
                    <Button
                        fullWidth
                        sx={{
                            padding: '10px 24px',
                            background: '#000',
                            color: '#FFFFFF',
                            fontFamily: 'sans-serif',
                            fontSize: '16px',
                            fontWeight: 400,
                            borderRadius: '100px',
                            textTransform: 'none',
                            boxShadow: 'none',
                            mb: 4,
                        }}
                    >
                        {buttonLabel}
                    </Button>
                    <Stack spacing={1} width="100%">
                        {features.map((item, i) => (
                            <Box key={i} display="flex" alignItems="center" gap={1}>
                                <CheckIcon sx={{ fontSize: 18 }} />
                                <Typography
                                    fontFamily="sans-serif"
                                    fontSize="18px"
                                    fontWeight={400}
                                    lineHeight={1.7}
                                    color="rgba(0, 0, 0, 0.7)"
                                >
                                    {item}
                                </Typography>
                            </Box>
                        ))}
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default PricingCard;