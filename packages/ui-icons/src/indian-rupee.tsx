import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * IndianRupee icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const IndianRupee = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faIndianRupee} {...props} />;
};

export default IndianRupee;
