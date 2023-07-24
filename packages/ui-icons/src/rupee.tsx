import { faRupee } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Rupee icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Rupee = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRupee} {...props} />;
};

export default Rupee;
