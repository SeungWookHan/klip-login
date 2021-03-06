import React from 'react';
import { Box, Button } from '@mui/material';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { userState } from '@recoil/user';
import { isValidUser } from '@utils/user';

export default function LogoutButton() {
    const user = useRecoilValue(userState);
    const resetUser = useResetRecoilState(userState);

    function handleClick() {
        if (isValidUser(user)) {
            resetUser();
        } else alert('alreadyLoggedOut');
    }
    return (
        <Box>
            <Button
                variant="contained"
                color="error"
                onClick={() => handleClick()}
            >
                ๋ก๊ทธ์์
            </Button>
        </Box>
    );
}
