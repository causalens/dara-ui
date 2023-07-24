import { faTanakh } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Tanakh icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Tanakh = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTanakh} {...props} />;
};

export default Tanakh;
