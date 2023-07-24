import { faGopuram } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Gopuram icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Gopuram = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGopuram} {...props} />;
};

export default Gopuram;
