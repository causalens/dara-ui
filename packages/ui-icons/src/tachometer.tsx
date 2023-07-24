import { faTachometer } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Tachometer icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Tachometer = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTachometer} {...props} />;
};

export default Tachometer;
