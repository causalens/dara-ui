import { faMenorah } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Menorah icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Menorah = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMenorah} {...props} />;
};

export default Menorah;
