import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { IconButton } from '@mui/material';
import Link from 'next/link';
import { FC } from 'react';
const Back:FC = () => {
  return (
    <div className="m-4">
      <IconButton color="primary" aria-label="go back">
        <Link href="/">
          <ArrowBackRoundedIcon sx={{fontSize:50}}/>
        </Link>
      </IconButton>
    </div>
  );
}

export default Back;