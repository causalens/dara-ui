import { faTram } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Tram icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Tram = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTram} {...props} />;
};

export default Tram;
