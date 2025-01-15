import { ReactElement } from 'react';

import './profile.module.scss';

const Profile = (): ReactElement => {
    const Profile = 'Profile Test';

    return (
        <>
            <div data-testid="profile-component">{Profile}</div>
        </>
    );
};

export default Profile;
