import { faKiss } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Kiss icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Kiss = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faKiss} {...props} />;
};

export default Kiss;
