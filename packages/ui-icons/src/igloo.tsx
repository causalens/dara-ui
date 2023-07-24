import { faIgloo } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Igloo icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Igloo = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faIgloo} {...props} />;
};

export default Igloo;
