import { faSortNumericUpAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SortNumericUpAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SortNumericUpAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSortNumericUpAlt} {...props} />;
};

export default SortNumericUpAlt;
