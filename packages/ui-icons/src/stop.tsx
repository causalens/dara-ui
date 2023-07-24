import { faStop } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Stop icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Stop = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faStop} {...props} />;
};

export default Stop;
