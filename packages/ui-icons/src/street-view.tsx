import { faStreetView } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * StreetView icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const StreetView = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faStreetView} {...props} />;
};

export default StreetView;
