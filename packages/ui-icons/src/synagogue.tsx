import { faSynagogue } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Synagogue icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Synagogue = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSynagogue} {...props} />;
};

export default Synagogue;
