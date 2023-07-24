import { faCogs } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Cogs icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Cogs = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCogs} {...props} />;
};

export default Cogs;
