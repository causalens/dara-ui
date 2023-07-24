import { faCny } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Cny icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Cny = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCny} {...props} />;
};

export default Cny;
