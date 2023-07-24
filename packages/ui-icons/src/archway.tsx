import { faArchway } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Archway icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Archway = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArchway} {...props} />;
};

export default Archway;
