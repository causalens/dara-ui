import { faNeuter } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Neuter icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Neuter = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faNeuter} {...props} />;
};

export default Neuter;
