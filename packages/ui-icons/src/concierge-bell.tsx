import { faConciergeBell } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ConciergeBell icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ConciergeBell = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faConciergeBell} {...props} />;
};

export default ConciergeBell;
